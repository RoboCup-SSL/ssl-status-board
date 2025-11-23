package board

import (
	"net"
	"sync"

	"github.com/RoboCup-SSL/ssl-go-tools/pkg/sslnet"
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
	b.MulticastServer = sslnet.NewMulticastServer(b.cfg.MulticastAddress)
	b.MulticastServer.Consumer = b.handlingMessage
	return
}

// Start listening for messages
func (b *Board) Start() {
	b.MulticastServer.Start()
}

// Stop listening for messages
func (b *Board) Stop() {
	b.MulticastServer.Stop()
}

func (b *Board) handlingMessage(data []byte, _ *net.UDPAddr) {
	b.mutex.Lock()
	defer b.mutex.Unlock()
	b.refereeData = data
}

func (b *Board) RefereeData() []byte {
	return b.refereeData
}

func (b *Board) RefereeConfig() RefereeConfig {
	return b.cfg
}
