#!/usr/bin/env bash
wget -qO- https://github.com/RoboCup-SSL/ssl-status-board/releases/latest/download/bootstrap.tar.gz | tar xvz
cd ssl-status-board || exit 1
./bootstrap.sh
