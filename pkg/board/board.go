package board

import (
	"fmt"
	"log"
	"net"
	"net/http"
	"runtime"
	"strings"
	"sync"
	"time"

	"github.com/gorilla/websocket"
	"golang.org/x/net/ipv4"
)

// MulticastServer handles multicast UDP reception with platform-specific logic
type MulticastServer struct {
	multicastAddr  string
	SkipInterfaces []string
	conn           *net.UDPConn
	packetConn     *ipv4.PacketConn
	handler        func([]byte, *net.UDPAddr)
	running        bool
	mutex          sync.Mutex
}

// NewMulticastServer creates a new multicast server
func NewMulticastServer(multicastAddr string, skipInterfaces []string) *MulticastServer {
	return &MulticastServer{
		multicastAddr:  multicastAddr,
		SkipInterfaces: skipInterfaces,
	}
}

// Start begins listening for multicast messages
func (s *MulticastServer) Start() {
	s.mutex.Lock()
	defer s.mutex.Unlock()

	if s.running {
		return
	}
	s.running = true

	go s.listen()
}

// Stop stops listening for multicast messages
func (s *MulticastServer) Stop() {
	s.mutex.Lock()
	defer s.mutex.Unlock()

	s.running = false
	if s.conn != nil {
		s.conn.Close()
	}
	if s.packetConn != nil {
		s.packetConn.Close()
	}
}

// SetConsumer sets the message handler
func (s *MulticastServer) SetConsumer(handler func([]byte, *net.UDPAddr)) {
	s.handler = handler
}

// selectInterface selects an appropriate network interface for multicast, skipping the ones in skipInterfaces
func (s *MulticastServer) selectInterface() (*net.Interface, error) {
	interfaces, err := net.Interfaces()
	if err != nil {
		return nil, err
	}

	for _, iface := range interfaces {
		// Skip interfaces that are down, loopback, or in the skip list
		if iface.Flags&net.FlagUp == 0 || iface.Flags&net.FlagLoopback != 0 {
			continue
		}

		skip := false
		for _, skipName := range s.SkipInterfaces {
			if iface.Name == skipName {
				skip = true
				break
			}
		}
		if skip {
			continue
		}

		// Check if interface has IPv4 addresses
		addrs, err := iface.Addrs()
		if err != nil {
			continue
		}

		hasIPv4 := false
		for _, addr := range addrs {
			if ipnet, ok := addr.(*net.IPNet); ok && ipnet.IP.To4() != nil {
				hasIPv4 = true
				break
			}
		}

		if hasIPv4 {
			return &iface, nil
		}
	}

	return nil, fmt.Errorf("no suitable interface found")
}

func (s *MulticastServer) listen() {
	addr, err := net.ResolveUDPAddr("udp4", s.multicastAddr)
	if err != nil {
		log.Printf("Failed to resolve multicast address %s: %v", s.multicastAddr, err)
		return
	}

	if runtime.GOOS == "windows" {
		// Windows: Bind to 0.0.0.0 and manually join multicast group
		conn, err := net.ListenUDP("udp4", &net.UDPAddr{IP: net.IPv4zero, Port: addr.Port})
		if err != nil {
			log.Printf("Failed to listen on UDP: %v", err)
			return
		}
		s.conn = conn

		packetConn := ipv4.NewPacketConn(conn)

		// Select appropriate interface, considering skipInterfaces
		var iface *net.Interface
		iface, err = s.selectInterface()
		if err != nil {
			log.Printf("Failed to select interface for multicast: %v", err)
			conn.Close()
			return
		}

		if err := packetConn.JoinGroup(iface, addr); err != nil {
			log.Printf("Failed to join multicast group %s on Windows: %v", addr.IP.String(), err)
			conn.Close()
			return
		}
		s.packetConn = packetConn

		log.Printf("Joined multicast group %s on Windows using interface %s", addr.IP.String(), iface.Name)

		buf := make([]byte, 65536)
		for s.running {
			n, src, err := conn.ReadFromUDP(buf)
			if err != nil {
				if s.running {
					log.Printf("Error reading from UDP: %v", err)
				}
				break
			}

			if s.handler != nil {
				s.handler(buf[:n], src)
			}
		}
	} else {
		// Linux/Unix: Use ListenMulticastUDP with selected interface
		var iface *net.Interface
		iface, err = s.selectInterface()
		if err != nil {
			log.Printf("Failed to select interface for multicast: %v", err)
			return
		}

		conn, err := net.ListenMulticastUDP("udp4", iface, addr)
		if err != nil {
			log.Printf("Failed to listen on multicast UDP: %v", err)
			return
		}
		s.conn = conn

		log.Printf("Joined multicast group %s on %s using interface %s", addr.IP.String(), runtime.GOOS, iface.Name)

		buf := make([]byte, 65536)
		for s.running {
			n, src, err := conn.ReadFromUDP(buf)
			if err != nil {
				if s.running {
					log.Printf("Error reading from UDP: %v", err)
				}
				break
			}
			if s.handler != nil {
				s.handler(buf[:n], src)
			}
		}
	}
}

// Board contains the state of this referee board
type Board struct {
	cfg             RefereeConfig
	refereeData     []byte
	mutex           sync.Mutex
	MulticastServer *MulticastServer
	numClients      int
}

// NewBoard creates a new referee board
func NewBoard(cfg RefereeConfig) (b *Board) {
	b = new(Board)
	b.cfg = cfg
	b.MulticastServer = NewMulticastServer(b.cfg.MulticastAddress, b.cfg.SkipInterfaces)
	b.MulticastServer.SetConsumer(b.handlingMessage)
	return
}

// Start listening for messages
func (b *Board) Start() {
	b.MulticastServer.Start()
}

// Stop listening for messages
func (b *Board) Stop() {
	b.MulticastServer.Stop()
}

func (b *Board) handlingMessage(data []byte, _ *net.UDPAddr) {
	b.mutex.Lock()
	defer b.mutex.Unlock()
	b.refereeData = data
}

// SendToWebSocket sends latest data to the given websocket
func (b *Board) SendToWebSocket(conn *websocket.Conn) {
	b.mutex.Lock()
	b.numClients++
	b.mutex.Unlock()
	for b.SendRefereeData(conn) {
		time.Sleep(b.cfg.SendingInterval)
	}
	b.mutex.Lock()
	b.numClients--
	b.mutex.Unlock()
}

func (b *Board) SendRefereeData(conn *websocket.Conn) bool {
	b.mutex.Lock()
	data := b.refereeData
	b.mutex.Unlock()

	if len(data) == 0 {
		return true
	}

	if err := conn.SetWriteDeadline(time.Now().Add(time.Second)); err != nil {
		log.Println("Failed to set write deadline:", err)
		return false
	}
	if err := conn.WriteMessage(websocket.BinaryMessage, data); err != nil {
		// Check if this is a connection close error
		if websocket.IsCloseError(err, websocket.CloseGoingAway, websocket.CloseAbnormalClosure, websocket.CloseNormalClosure) ||
			websocket.IsUnexpectedCloseError(err) ||
			strings.Contains(err.Error(), "connection aborted") ||
			strings.Contains(err.Error(), "connection reset") {
			log.Printf("WebSocket connection closed by client: %v", err)
		} else {
			// log.Printf("Could not write to referee websocket: %v", err)
		}
		return false
	}
	return true
}

// WsHandler handles referee websocket connections
func (b *Board) WsHandler(w http.ResponseWriter, r *http.Request) {
	WsHandler(w, r, b.SendToWebSocket)
}

// ClientsHandler handles clients api
func (b *Board) ClientsHandler(w http.ResponseWriter, _ *http.Request) {
	b.mutex.Lock()
	numClients := b.numClients
	b.mutex.Unlock()
	if _, err := fmt.Fprintf(w, "Connected clients: %v", numClients); err != nil {
		w.WriteHeader(500)
	}
}
