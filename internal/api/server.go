package api

import (
	"context"
	"net/http"
	"strings"
	"sync"

	"github.com/RoboCup-SSL/ssl-status-board/frontend"
	"github.com/RoboCup-SSL/ssl-status-board/pkg/board"
)

// Server contains the internal http board and exposes an api for the frontend
type Server struct {
	httpServer *http.Server
	config     board.Config
	ctx        context.Context
	cancel     context.CancelFunc
	board      Board
	numClients int
	clientsMu  sync.Mutex
}

// NewServer setups the api server
func NewServer(board Board, config board.Config) *Server {
	ctx, cancel := context.WithCancel(context.Background())

	return &Server{
		board:  board,
		config: config,
		ctx:    ctx,
		cancel: cancel,
		httpServer: &http.Server{
			Addr: config.ListenAddress,
		},
	}
}

// Serve http endpoints until stopped
func (s *Server) Serve() error {
	http.HandleFunc(clientsRoute, s.clientsHandler)
	http.HandleFunc(s.config.RefereeConnection.SubscribePath, s.refereeWsHandler)

	frontend.HandleUi()

	s.board.Start()
	defer s.board.Stop()

	return s.httpServer.ListenAndServe()
}

// Stop http server
func (s *Server) Stop(ctx context.Context) error {
	s.cancel()
	return s.httpServer.Shutdown(ctx)
}

func (s *Server) Url() string {
	if strings.HasPrefix(s.config.ListenAddress, ":") {
		return "http://localhost" + s.config.ListenAddress
	}
	return "http://" + s.config.ListenAddress
}

func (s *Server) NumClients() int {
	s.clientsMu.Lock()
	defer s.clientsMu.Unlock()

	return s.numClients
}
