package board

import (
	"encoding/json"
	"time"
)

// ConnectionConfig contains parameters for multicast -> websocket connections
type ConnectionConfig struct {
	SubscribePath    string        `yaml:"SubscribePath"`
	SendingInterval  time.Duration `yaml:"SendingInterval"`
	MulticastAddress string        `yaml:"MulticastAddress"`
	SkipInterfaces   []string      `yaml:"skip-interfaces"`
}

// RefereeConfig contains referee specific connection parameters
type RefereeConfig struct {
	ConnectionConfig `yaml:"Connection"`
}

// Config is the root config containing all configs for the server
type Config struct {
	ListenAddress     string        `yaml:"ListenAddress"`
	RefereeConnection RefereeConfig `yaml:"RefereeConfig"`
}

// String converts the config to a string
func (c Config) String() string {
	str, err := json.Marshal(c)
	if err != nil {
		return err.Error()
	}
	return string(str)
}

// DefaultConfig creates a config instance filled with default values
func DefaultConfig() Config {
	return Config{
		ListenAddress: ":8082",
		RefereeConnection: RefereeConfig{
			ConnectionConfig: ConnectionConfig{
				MulticastAddress: "224.5.23.1:10003",
				SkipInterfaces:   []string{},
				SendingInterval:  time.Millisecond * 100,
				SubscribePath:    "/api/referee",
			},
		},
	}
}
