package main

import (
	"flag"
	"github.com/RoboCup-SSL/ssl-status-board/pkg/board"
	"github.com/gobuffalo/packr"
	"log"
	"net/http"
)

var address = flag.String("address", ":8082", "The address on which the UI and API is served")
var configFile = flag.String("c", "config/board-config.yaml", "The config file to use")

func main() {
	flag.Parse()

	config := loadConfig(*configFile)

	refereeBoard := board.NewBoard(config.RefereeConnection)
	go refereeBoard.HandleIncomingMessages()
	http.HandleFunc(config.RefereeConnection.SubscribePath, refereeBoard.WsHandler)

	setupUi()

	err := http.ListenAndServe(config.ListenAddress, nil)
	if err != nil {
		log.Fatal(err)
	}
}

func setupUi() {
	box := packr.NewBox("../../dist")
	http.Handle("/", http.FileServer(box))
	if box.Has("index.html") {
		log.Printf("UI is available at http://%v", *address)
	} else {
		log.Print("Backend-only version started. Run the UI separately or get a binary that has the UI included")
	}
}

// loadConfig loads the config
func loadConfig(configFileName string) board.Config {
	cfg, err := board.ReadConfig(configFileName)
	if err != nil {
		log.Printf("Could not load config: %v", err)
		err = cfg.WriteTo(configFileName)
		if err != nil {
			log.Printf("Failed to write a default config file to %v: %v", configFileName, err)
		} else {
			log.Println("New default config has been written to", configFileName)
		}
	}
	return cfg
}
