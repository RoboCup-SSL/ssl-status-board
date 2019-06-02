package board

import (
	"log"
	"net"
)

// MaxDatagramSize is the maximum read buffer size for network communication
const MaxDatagramSize = 8192

// OpenMulticastUdpConnection opens a UDP multicast connection for read and returns it
func OpenMulticastUdpConnection(address string) (err error, listener *net.UDPConn) {
	addr, err := net.ResolveUDPAddr("udp", address)
	if err != nil {
		log.Fatal(err)
	}
	listener, err = net.ListenMulticastUDP("udp", nil, addr)
	if err != nil {
		log.Fatal("could not connect to ", address)
	}
	err = listener.SetReadBuffer(MaxDatagramSize)
	if err != nil {
		log.Fatalln("could not set read buffer")
	}
	log.Printf("Listening on %s", address)
	return
}

// HandleIncomingMessages listens for data from a multicast connection and passes data to the consumer
func HandleIncomingMessages(address string, consumer func([]byte)) {
	err, listener := OpenMulticastUdpConnection(address)
	if err != nil {
		log.Println("Could not connect to ", address)
	}

	for {
		data := make([]byte, MaxDatagramSize)
		n, _, err := listener.ReadFromUDP(data)
		if err != nil {
			log.Println("ReadFromUDP failed: ", err)
			break
		}

		consumer(data[:n])
	}

	err = listener.Close()
	if err != nil {
		log.Println("Could not close referee multicast connection")
	}
}
