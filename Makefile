CMDS = ssl-status-board
DOCKER_TARGETS = $(addprefix docker-, $(CMDS))
.PHONY: all docker frontend test install proto build $(DOCKER_TARGETS)

ifeq ($(OS),Windows_NT)
    # Windows
    TOUCH = type nul >
    RM = del /F /Q
    FRONTEND_FILES = frontend/package.json frontend/package-lock.json
    EXE_EXT = .exe
    GOOS = windows
    GOARCH = amd64
else
    # Linux/Unix
    TOUCH = touch
    RM = rm -f
    FRONTEND_FILES = $(shell find frontend/ -type f -not -path "frontend/node_modules/*")
    EXE_EXT = 
    GOOS = $(shell go env GOOS)
    GOARCH = $(shell go env GOARCH)
endif

all: install docker

docker: $(DOCKER_TARGETS)

$(DOCKER_TARGETS): docker-%:
	docker build -f ./cmd/$*/Dockerfile -t $*:latest .

.frontend: $(FRONTEND_FILES)
	cd frontend && \
	npm install && \
	npm run build
	$(TOUCH) .frontend

frontend: .frontend

build: frontend
ifeq ($(OS),Windows_NT)
	go env -w GOOS=windows
	go env -w GOARCH=amd64
	go build -o ./bin/ssl-status-board$(EXE_EXT) ./cmd/ssl-status-board
else
	GOOS=$(GOOS) GOARCH=$(GOARCH) go build -o ./bin/ssl-status-board$(EXE_EXT) ./cmd/ssl-status-board
endif

install: frontend
	go install -v ./...

test: frontend
	go test ./...

run: frontend
	go run ./cmd/$(word 1,$(CMDS)) -refereeAddress 224.5.24.1:11003

proto: frontend
	cd frontend && npm run genProto

update-backend:
	go get -v -u all

update-frontend:
	cd frontend && \
	npm update --save

update: update-backend update-frontend proto
