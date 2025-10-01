FROM node:22-alpine@sha256:41e4389f3d988d2ed55392df4db1420ad048ae53324a8e2b7c6d19508288107e AS build_node
COPY frontend frontend
WORKDIR frontend
RUN npm install
RUN npm run build

FROM golang:1.24-alpine@sha256:fc2cff6625f3c1c92e6c85938ac5bd09034ad0d4bc2dfb08278020b68540dbb5 AS build_go
ARG cmd=ssl-status-board
WORKDIR work
COPY . .
COPY --from=build_node frontend/dist frontend/dist
RUN go install ./cmd/${cmd}

# Start fresh from a smaller image
FROM alpine:3@sha256:4bcff63911fcb4448bd4fdacec207030997caf25e9bea4045fa6c8c44de311d1
ARG cmd=ssl-status-board
COPY --from=build_go /go/bin/${cmd} /app
USER 1000
ENTRYPOINT ["/app"]
CMD []
