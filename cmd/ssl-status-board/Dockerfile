FROM node:24-alpine@sha256:e67514e5d0f6c46656005e1b693b2ec9d52e80b641307de684d4a015ba7a4eaf AS build_node
COPY frontend frontend
WORKDIR frontend
RUN npm install
RUN npm run build

FROM --platform=$BUILDPLATFORM golang:1.27-alpine@sha256:8a5910f31396cd4d89662f56c68b3ae31d374308270a1c3bd96672ee5ed43414 AS build_go
ARG BINARY_NAME=ssl-status-board
ARG TARGETOS
ARG TARGETARCH
WORKDIR work
COPY . .
COPY --from=build_node frontend/dist frontend/dist
RUN --mount=type=cache,target=/go/pkg/mod \
    --mount=type=cache,target=/root/.cache/go-build \
    GOOS=$TARGETOS GOARCH=$TARGETARCH go build -trimpath -ldflags "-w -s" -o /app ./cmd/${BINARY_NAME}

# Start fresh from a smaller image
FROM alpine:3@sha256:294b683cb724975bec92580e1e685676bd4b50bda910ddb8c51d4cabeaec77e6
COPY --from=build_go /app /app
USER 1000
ENTRYPOINT ["/app"]
CMD []
