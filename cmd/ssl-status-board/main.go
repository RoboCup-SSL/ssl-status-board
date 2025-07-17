package main

import (
	"flag"
	"github.com/RoboCup-SSL/ssl-status-board/frontend"
	"github.com/RoboCup-SSL/ssl-status-board/pkg/board"
	"log"
	"net/http"
	"strings"
)

func main() {
	var config = board.DefaultConfig()
	var address = flag.String("address", config.ListenAddress, "The address on which the UI and API is served")
	var refereeAddress = flag.String("refereeAddress", config.RefereeConnection.MulticastAddress, "The multicast address of ssl-game-controller")
	var skipInterfaces = flag.String("skipInterfaces", "", "Comma separated list of interface names to ignore when receiving multicast packets")
	flag.Parse()

	config.ListenAddress = *address
	config.RefereeConnection.MulticastAddress = *refereeAddress
	if skipInterfaces != nil && *skipInterfaces != "" {
		config.RefereeConnection.SkipInterfaces = parseSkipInterfaces(*skipInterfaces)
	}

	refereeBoard := board.NewBoard(config.RefereeConnection)
	refereeBoard.MulticastServer.SkipInterfaces = config.RefereeConnection.SkipInterfaces
	refereeBoard.Start()
	http.HandleFunc(config.RefereeConnection.SubscribePath, refereeBoard.WsHandler)
	http.HandleFunc("/api/clients", refereeBoard.ClientsHandler)

	frontend.HandleUi()

	var formattedAddress = func() string {
		if strings.HasPrefix(*address, ":") {
			return "http://localhost" + *address
		}
		return "http://" + *address
	}

	log.Printf("UI is available at %v", formattedAddress())

	err := http.ListenAndServe(config.ListenAddress, nil)
	if err != nil {
		log.Fatal(err)
	}
}

func parseSkipInterfaces(skipInterfaces string) []string {
	return strings.Split(skipInterfaces, ",")
}
