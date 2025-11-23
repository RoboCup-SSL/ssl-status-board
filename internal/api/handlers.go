package api

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/websocket"
)

const clientsRoute = "/api/clients"

func (s *Server) clientsHandler(w http.ResponseWriter, r *http.Request) {
	numClients := s.NumClients()

	w.WriteHeader(http.StatusOK)
	w.Write([]byte(fmt.Sprintf("Connected clients: %d", numClients)))
}

func (s *Server) refereeWsHandler(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Printf("Failed to upgrade websocket connection: %v\n", err)
		return
	}

	s.clientsMu.Lock()
	s.numClients++
	s.clientsMu.Unlock()

	log.Printf("Client connected (Currently connected clients: %d)\n", s.NumClients())

	defer func() {
		conn.Close()

		s.clientsMu.Lock()
		s.numClients--
		s.clientsMu.Unlock()

		log.Printf("Client disconnected (Currently connected clients: %d)\n", s.NumClients())
	}()

	ctx, cancel := context.WithCancel(s.ctx)
	defer cancel()

	for ctx.Err() == nil {
		refereeData := s.board.RefereeData()

		if err = conn.SetWriteDeadline(time.Now().Add(time.Second)); err != nil {
			log.Printf("Failed to set write deadline: %v\n", err)
			return
		}

		if len(refereeData) != 0 {
			if err = conn.WriteMessage(websocket.BinaryMessage, refereeData); err != nil {
				log.Printf("Failed to write to referee socket: %v\n", err)
				return
			}
		}

		time.Sleep(s.board.RefereeConfig().SendingInterval)
	}
}
