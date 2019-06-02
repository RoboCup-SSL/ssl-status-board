package board

import (
	"github.com/gorilla/websocket"
	"log"
	"net/http"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin:     func(*http.Request) bool { return true },
}

// WsHandler converts the request into a websocket connection and passes it to the consumer
func WsHandler(w http.ResponseWriter, r *http.Request, consumer func(conn *websocket.Conn)) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println(err)
		return
	}

	log.Println("Client connected")
	consumer(conn)
	log.Println("Client disconnected")

	err = conn.Close()
	if err != nil {
		log.Println("Could not close connection")
	}
}
