package board

import (
	"github.com/RoboCup-SSL/ssl-status-board/pkg/sslnet"
	"github.com/gorilla/websocket"
	"log"
	"net/http"
	"sync"
	"time"
)

// Board contains the state of this referee board
type Board struct {
	cfg               RefereeConfig
	refereeData       []byte
	mutex             sync.Mutex
	MulticastReceiver *sslnet.MulticastReceiver
}

// NewBoard creates a new referee board
func NewBoard(cfg RefereeConfig) (b *Board) {
	b = new(Board)
	b.cfg = cfg
	b.MulticastReceiver = sslnet.NewMulticastReceiver(b.handlingMessage)
	return
}

// Start listening for messages
func (b *Board) Start() {
	b.MulticastReceiver.Start(b.cfg.MulticastAddress)
}

// Stop listening for messages
func (b *Board) Stop() {
	b.MulticastReceiver.Stop()
}

func (b *Board) handlingMessage(data []byte) {
	b.mutex.Lock()
	defer b.mutex.Unlock()
	b.refereeData = data
}

// SendToWebSocket sends latest data to the given websocket
func (b *Board) SendToWebSocket(conn *websocket.Conn) {
	for {
		b.mutex.Lock()
		if len(b.refereeData) > 0 {
			if err := conn.WriteMessage(websocket.BinaryMessage, b.refereeData); err != nil {
				log.Println("Could not write to referee websocket: ", err)
				return
			}
		}
		b.mutex.Unlock()

		time.Sleep(b.cfg.SendingInterval)
	}
}

// WsHandler handles referee websocket connections
func (b *Board) WsHandler(w http.ResponseWriter, r *http.Request) {
	WsHandler(w, r, b.SendToWebSocket)
}
