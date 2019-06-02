package board

import (
	"fmt"
	"github.com/RoboCup-SSL/ssl-game-controller/pkg/refproto"
	"github.com/golang/protobuf/proto"
	"github.com/gorilla/websocket"
	"log"
	"net/http"
	"time"
)

// Board contains the state of this referee board
type Board struct {
	cfg     RefereeConfig
	referee *refproto.Referee
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
	message := new(refproto.Referee)
	err := proto.Unmarshal(data, message)
	if err != nil {
		log.Print("Could not parse referee message: ", err)
	} else {
		b.referee = message
	}
}

// SendToWebSocket sends latest data to the given websocket
func (b *Board) SendToWebSocket(conn *websocket.Conn) {
	for {
		if b.referee != nil {
			data, err := proto.Marshal(b.referee)
			if err != nil {
				fmt.Println("Marshal error:", err)
			}
			if err := conn.WriteMessage(websocket.BinaryMessage, data); err != nil {
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
