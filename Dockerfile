FROM node:18.3.0-alpine3.16 AS build_node
WORKDIR /tmp/ssl-status-board
COPY . .
RUN yarn install
RUN yarn build

FROM golang:1.18-alpine AS build_go
WORKDIR /go/src/github.com/RoboCup-SSL/ssl-status-board
COPY . .
COPY --from=build_node /tmp/ssl-status-board/pkg/board/ui/dist pkg/board/ui/dist
RUN go build -o release/ssl-status-board_linux_amd64 ./cmd/ssl-status-board

# Start fresh from a smaller image
FROM alpine:3.16
COPY --from=build_go /go/src/github.com/RoboCup-SSL/ssl-status-board/release/ssl-status-board_linux_amd64 /app/ssl-status-board
EXPOSE 8082
USER 1000
ENTRYPOINT ["/app/ssl-status-board"]
CMD []
