# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architecture

This is a Go web application with a Vue.js frontend that displays a status board for RoboCup Small Size League matches. The application receives real-time referee data via UDP multicast and serves it to browsers via WebSocket connections.

### Key Components

- **Backend (Go)**: Located in `pkg/board/`, handles UDP multicast reception of referee messages and WebSocket serving
- **Frontend (Vue.js)**: Located in `frontend/src/`, displays game state with team logos, scores, timers, and events
- **Protocol**: Uses protobuf messages defined in `frontend/src/proto/` for referee communication
- **Embedded Assets**: Frontend is embedded into the Go binary using `frontend/embed.go`

### Architecture Flow

1. Go backend receives referee data via UDP multicast (`pkg/board/board.go`)
2. Data is stored and served to WebSocket clients (`pkg/board/websocket.go`)
3. Vue.js frontend connects via WebSocket to receive real-time updates
4. Components render game state including teams, scores, timers, and events

## Development Commands

### Frontend Development
```bash
cd frontend
npm install
export NODE_OPTIONS=--openssl-legacy-provider  # Required for Node 18+
npm run serve  # Hot-reload development server
npm run build  # Production build
npm run lint   # ESLint
npm run genProto  # Regenerate protobuf JavaScript from .proto files
```

### Full Application
```bash
make install     # Build and install binary (includes frontend build)
make run         # Build and run application
make test        # Run Go tests
make frontend    # Build frontend only
make proto       # Regenerate protobuf code
```

### Docker
```bash
make docker      # Build Docker image
docker run -p 8082:8082 ssl-status-board:latest
```

## Key Files

- `cmd/ssl-status-board/main.go`: Application entry point, HTTP server setup
- `pkg/board/board.go`: Core UDP multicast handling and state management
- `pkg/board/websocket.go`: WebSocket server for real-time frontend updates
- `frontend/src/App.vue`: Main Vue application component
- `frontend/src/components/StatusBoard.vue`: Primary game display component
- `frontend/src/teamLogoUrl.js`: Team logo mapping (modify to add new team logos)

## Protocol Buffers

The application uses SSL referee protocol messages. When modifying .proto files in `frontend/src/proto/`, regenerate JavaScript bindings with `npm run genProto` or `make proto`.

## Adding Team Logos

1. Add logo image to `frontend/src/assets/logos/`
2. Update `frontend/src/teamLogoUrl.js` with team name mapping (must match ssl-game-controller team name in lowercase)