package board

import (
	"fmt"
	"github.com/RoboCup-SSL/ssl-status-board/pkg/sslnet"
	"github.com/gorilla/websocket"
	"log"
	"net/http"
	"sync"
	"time"
)

// Board contains the state of this referee board
type Board struct {
	cfg             RefereeConfig
	refereeData     []byte
	mutex           sync.Mutex
	MulticastServer *sslnet.MulticastServer
	numClients      int
}

// NewBoard creates a new referee board
func NewBoard(cfg RefereeConfig) (b *Board) {
	b = new(Board)
	b.cfg = cfg
	b.MulticastServer = sslnet.NewMulticastServer(b.handlingMessage)
	return
}

// Start listening for messages
func (b *Board) Start() {
	b.MulticastServer.Start(b.cfg.MulticastAddress)
}

// Stop listening for messages
func (b *Board) Stop() {
	b.MulticastServer.Stop()
}

func (b *Board) handlingMessage(data []byte) {
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
		log.Println("Could not write to referee websocket: ", err)
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
