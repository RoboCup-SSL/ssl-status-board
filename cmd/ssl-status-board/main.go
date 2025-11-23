package main

import (
	"context"
	"errors"
	"flag"
	"log"
	"net/http"
	"os"
	"os/signal"
	"strings"
	"syscall"
	"time"

	"github.com/RoboCup-SSL/ssl-status-board/internal/api"
	"github.com/RoboCup-SSL/ssl-status-board/pkg/board"
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

	apiServer := api.NewServer(refereeBoard, config)

	ctx, cancel := context.WithTimeout(context.Background(), time.Second*5) // Allow connected clients 5 seconds to shutdown gracefully
	defer cancel()

	defer apiServer.Stop(ctx)

	log.Printf("UI is available at %s", apiServer.Url())

	sigs := make(chan os.Signal, 1)
	signal.Notify(sigs, syscall.SIGINT, syscall.SIGTERM)

	go func() {
		if err := apiServer.Serve(); err != nil {
			if errors.Is(err, http.ErrServerClosed) {
				return
			}

			log.Fatalf("API server exited with error: %v", err)
		}
	}()

	sig := <-sigs
	log.Printf("Shutting down: %s", sig)
}

func parseSkipInterfaces(skipInterfaces string) []string {
	return strings.Split(skipInterfaces, ",")
}
