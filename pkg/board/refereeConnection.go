package board

import (
	"github.com/gorilla/websocket"
	"log"
	"net/http"
	"time"
)

// Board contains the state of this referee board
type Board struct {
	cfg         RefereeConfig
	refereeData []byte
}

// NewBoard creates a new referee board
func NewBoard(cfg RefereeConfig) Board {
	return Board{cfg: cfg}
}

// HandleIncomingMessages listens for new messages and stores the latest ones
func (b *Board) HandleIncomingMessages() {
	HandleIncomingMessages(b.cfg.ConnectionConfig.MulticastAddress, b.handlingMessage)
}

func (b *Board) handlingMessage(data []byte) {
	b.refereeData = data
}

// SendToWebSocket sends latest data to the given websocket
func (b *Board) SendToWebSocket(conn *websocket.Conn) {
	for {
		if len(b.refereeData) > 0 {
			if err := conn.WriteMessage(websocket.BinaryMessage, b.refereeData); err != nil {
				log.Println("Could not write to referee websocket: ", err)
				return
			}
		}

		time.Sleep(b.cfg.SendingInterval)
	}
}

// WsHandler handles referee websocket connections
func (b *Board) WsHandler(w http.ResponseWriter, r *http.Request) {
	WsHandler(w, r, b.SendToWebSocket)
}
