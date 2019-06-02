#!/bin/sh

set -e

# UI
yarn install
yarn run build

# backend
go get -v -d ./...
cd cmd/ssl-status-board
go get -u -v github.com/gobuffalo/packr/packr
packr install
