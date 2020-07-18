[![CircleCI](https://circleci.com/gh/RoboCup-SSL/ssl-status-board/tree/master.svg?style=svg)](https://circleci.com/gh/RoboCup-SSL/ssl-status-board/tree/master)
[![Go Report Card](https://goreportcard.com/badge/github.com/RoboCup-SSL/ssl-status-board?style=flat-square)](https://goreportcard.com/report/github.com/RoboCup-SSL/ssl-status-board)
[![Go Doc](https://img.shields.io/badge/godoc-reference-blue.svg?style=flat-square)](https://godoc.org/github.com/RoboCup-SSL/ssl-status-board)
[![Release](https://img.shields.io/github/release/RoboCup-SSL/ssl-status-board.svg?style=flat-square)](https://github.com/RoboCup-SSL/ssl-status-board/releases/latest)
[![Coverage](https://img.shields.io/badge/coverage-report-blue.svg)](https://circleci.com/api/v1.1/project/github/RoboCup-SSL/ssl-status-board/latest/artifacts/0/coverage?branch=master)

# SSL Status Board

A Status Board for the Small Size League, optimized to show the current game state on a large screen.

## Usage
If you just want to use this app, simply download the latest [release binary](https://github.com/RoboCup-SSL/ssl-status-board/releases/latest).
The binary is self-contained. No dependencies are required.

You can also use pre-build docker images:
```shell script
docker pull robocupssl/ssl-status-board
docker run -p 8082:8082 robocupssl/ssl-status-board
# if you want to pass in the config file:
docker run -p 8082:8082 -v "$(pwd)/config:/config" ssl-status-board
```

By default, the UI is available at http://localhost:8082

A configuration file will be generated to `config/board-config.yaml` and can be tweaked.

### Runtime Requirements
 * No software dependencies (except for development, see below)
 * 64bit Linux, Windows, OSX (build your 32bit binaries yourself...)
 * A reasonable Web-Browser (mostly tested on Chrome)
 
## Development

### Requirements
You need to install following dependencies first: 
 * Go >= 1.13
 * Node
 * Yarn

### Prepare
Download and install to [GOPATH](https://github.com/golang/go/wiki/GOPATH):
```bash
go get -u github.com/RoboCup-SSL/ssl-status-board/...
```
Switch to project root directory
```bash
cd $GOPATH/src/github.com/RoboCup-SSL/ssl-status-board/
```
Download dependencies for frontend
```bash
yarn install
```

### Run the backend
```bash
go run cmd/ssl-status-board/main.go
```

### Run the UI
```bash
# compile and hot-reload
yarn serve
```

### Build self-contained release binary
```
./install.sh
```

### Rebuild Protobuf code
```
yarn run genProto
```
