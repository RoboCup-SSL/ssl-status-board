FROM node:24-alpine@sha256:e67514e5d0f6c46656005e1b693b2ec9d52e80b641307de684d4a015ba7a4eaf AS build_node
COPY frontend frontend
WORKDIR frontend
RUN npm install
RUN npm run build

FROM --platform=$BUILDPLATFORM golang:1.26-alpine@sha256:0178a641fbb4858c5f1b48e34bdaabe0350a330a1b1149aabd498d0699ff5fb2 AS build_go
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
FROM alpine:3@sha256:28bd5fe8b56d1bd048e5babf5b10710ebe0bae67db86916198a6eec434943f8b
COPY --from=build_go /app /app
USER 1000
ENTRYPOINT ["/app"]
CMD []
