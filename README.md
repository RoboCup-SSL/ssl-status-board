[![CircleCI](https://circleci.com/gh/RoboCup-SSL/ssl-status-board/tree/master.svg?style=svg)](https://circleci.com/gh/RoboCup-SSL/ssl-status-board/tree/master)
[![Go Report Card](https://goreportcard.com/badge/github.com/RoboCup-SSL/ssl-status-board?style=flat-square)](https://goreportcard.com/report/github.com/RoboCup-SSL/ssl-status-board)
[![Go Doc](https://img.shields.io/badge/godoc-reference-blue.svg?style=flat-square)](https://godoc.org/github.com/RoboCup-SSL/ssl-status-board)
[![Release](https://img.shields.io/github/release/RoboCup-SSL/ssl-status-board.svg?style=flat-square)](https://github.com/RoboCup-SSL/ssl-status-board/releases/latest)
[![Coverage](https://img.shields.io/badge/coverage-report-blue.svg)](https://circleci.com/api/v1.1/project/github/RoboCup-SSL/ssl-status-board/latest/artifacts/0/coverage?branch=master)

# SSL Status Board

A Status Board for the Small Size League, optimized to show the current game state on a large screen.

## Adding your teams logo
If you would like to see your teams logo on the status-board, add it to [frontend/src/assets/logos](frontend/src/assets/logos) and include it in [frontend/src/teamLogoUrl.js](frontend/src/teamLogoUrl.js).
The team name must match the one configured in the ssl-game-controller in all lowercase.

## Usage
If you just want to use this app, simply download the latest [release binary](https://github.com/RoboCup-SSL/ssl-status-board/releases/latest).
The binary is self-contained. No dependencies are required.

You can also use pre-build docker images:
```shell
docker pull robocupssl/ssl-status-board
docker run -p 8082:8082 robocupssl/ssl-status-board
```

By default, the UI is available at http://localhost:8082

A configuration file will be generated to `config/board-config.yaml` and can be tweaked.

A website (like Youtube) can be displayed when there is no activity.
Pass the URL like this: `http://localhost:8082??showVideoAfter=420&url=https%3A%2F%2Fwww.youtube.com%2Fembed%2F364zEAsOclU%3Fstart%3D0%26autoplay%3D1%26mute%3D1%26loop%3D1%26playlist%3D364zEAsOclU`

### Runtime Requirements
 * No software dependencies (except for development, see below)
 * 64bit Linux, Windows, OSX (build your 32bit binaries yourself...)
 * A reasonable Web-Browser (mostly tested on Chrome)
 
## Development

### Requirements
You need to install following dependencies first:

 * Go
 * Node

See [.circleci/config.yml](.circleci/config.yml) for compatible versions.

### Frontend

See [frontend/README.md](frontend/README.md)

### Build
Build and install all binaries:

```shell
make install
```

### Run
Build and run main binary:

```shell
make run
```
