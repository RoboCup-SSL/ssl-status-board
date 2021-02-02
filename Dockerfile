FROM node:10.21.0-jessie AS build_node
WORKDIR /tmp/ssl-status-board
COPY . .
RUN yarn install
RUN yarn build

FROM golang:1.14-alpine AS build_go
WORKDIR /go/src/github.com/RoboCup-SSL/ssl-status-board
COPY . .
COPY --from=build_node /tmp/ssl-status-board/dist dist
RUN go get -v -t -d ./...
RUN go get -v github.com/gobuffalo/packr/packr
WORKDIR cmd/ssl-status-board
RUN GOOS=linux GOARCH=amd64 packr build -o ../../release/ssl-status-board_linux_amd64

# Start fresh from a smaller image
FROM alpine:3.9
COPY --from=build_go /go/src/github.com/RoboCup-SSL/ssl-status-board/release/ssl-status-board_linux_amd64 /app/ssl-status-board
EXPOSE 8082
ENTRYPOINT ["/app/ssl-status-board"]
CMD []
