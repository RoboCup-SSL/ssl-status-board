package board

import (
	"encoding/json"
	"github.com/pkg/errors"
	"gopkg.in/yaml.v2"
	"io/ioutil"
	"log"
	"os"
	"path/filepath"
	"time"
)

// ConnectionConfig contains parameters for multicast -> websocket connections
type ConnectionConfig struct {
	SubscribePath    string        `yaml:"SubscribePath"`
	SendingInterval  time.Duration `yaml:"SendingInterval"`
	MulticastAddress string        `yaml:"MulticastAddress"`
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

// ReadConfig reads the server config from a yaml file
func ReadConfig(fileName string) (config Config, err error) {
	config = DefaultConfig()
	f, err := os.Open(fileName)
	if err != nil {
		return
	}
	d, err := ioutil.ReadAll(f)
	if err != nil {
		log.Fatalln("Could not read config file: ", err)
	}
	err = yaml.Unmarshal(d, &config)
	if err != nil {
		log.Fatalln("Could not unmarshal config file: ", err)
	}
	return
}

// WriteTo writes the config to the specified file
func (c *Config) WriteTo(fileName string) (err error) {
	b, err := yaml.Marshal(c)
	if err != nil {
		err = errors.Wrapf(err, "Could not marshal config %v", c)
		return
	}
	err = os.MkdirAll(filepath.Dir(fileName), 0755)
	if err != nil {
		err = errors.Wrapf(err, "Could not create directory for config file: %v", fileName)
		return
	}
	err = ioutil.WriteFile(fileName, b, 0600)
	return
}

// DefaultConfig creates a config instance filled with default values
func DefaultConfig() Config {
	return Config{
		ListenAddress: ":8082",
		RefereeConnection: RefereeConfig{
			ConnectionConfig: ConnectionConfig{
				MulticastAddress: "224.5.23.1:10003",
				SendingInterval:  time.Millisecond * 100,
				SubscribePath:    "/api/referee",
			},
		},
	}
}
