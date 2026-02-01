CMDS = ssl-status-board
DOCKER_TARGETS = $(addprefix docker-, $(CMDS))
.PHONY: all docker frontend test install proto $(DOCKER_TARGETS)

all: install docker

docker: $(DOCKER_TARGETS)

$(DOCKER_TARGETS): docker-%:
	docker build -f ./cmd/$*/Dockerfile --build-arg BINARY_NAME=$* -t $*:latest .

.frontend: $(shell find frontend/ -type f -not -path "frontend/node_modules/*")
	cd frontend && \
	npm install && \
	npm run build && \
	touch ../.frontend

frontend: .frontend

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
