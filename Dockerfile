FROM node:20-alpine AS build_node
COPY frontend frontend
WORKDIR frontend
RUN npm install
RUN npm run build

FROM golang:1.20-alpine AS build_go
ARG cmd=ssl-status-board
WORKDIR work
COPY . .
COPY --from=build_node frontend/dist frontend/dist
RUN go install ./cmd/${cmd}

# Start fresh from a smaller image
FROM alpine:3
ARG cmd
COPY --from=build_go /go/bin/${cmd} /app/${cmd}
WORKDIR /data
RUN chown 1000: /data
USER 1000
ENV COMMAND="/app/${cmd}"
ENTRYPOINT "${COMMAND}"
CMD []
