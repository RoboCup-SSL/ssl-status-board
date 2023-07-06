#!/usr/bin/env bash

set -Eeuo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"

SRC_VERSION=${1-}

function updateSystem() {
    sudo apt-get update
    sudo apt-get -y dist-upgrade
}

function installService() {
    mkdir -p ~/.local/share/systemd/user/
    cp "$SCRIPT_DIR/ssl-status-board.service" ~/.local/share/systemd/user/ssl-status-board.service
    systemctl --user enable ssl-status-board.service
}

function installStatusBoard() {
    sudo apt-get install --no-install-recommends -y curl jq

    systemctl --user stop ssl-status-board.service
    mkdir -p ~/.local/bin/
    if [[ -z "${SRC_VERSION}" ]]; then
        SRC_VERSION="$(curl -s https://api.github.com/repos/RoboCup-SSL/ssl-status-board/releases/latest | jq -r '.tag_name')"
    fi
    echo "Installing version: ${SRC_VERSION}"
    wget "https://github.com/RoboCup-SSL/ssl-status-board/releases/download/${SRC_VERSION}/ssl-status-board_${SRC_VERSION}_linux_arm" -O ~/.local/bin/ssl-status-board
    chmod +x ~/.local/bin/ssl-status-board
    systemctl --user start ssl-status-board.service
}

function installBrowser() {
    # https://blog.r0b.io/post/minimal-rpi-kiosk/
    sudo apt-get install --no-install-recommends -y \
        xserver-xorg-video-all xserver-xorg-input-all xserver-xorg-core xinit x11-xserver-utils \
        unclutter \
        xinput \
        chromium-browser

    # Enable Auto-Login on console
    mkdir -p /etc/systemd/system/getty@tty1.service.d
    sudo cp "${SCRIPT_DIR}/autologin.conf" /etc/systemd/system/getty@tty1.service.d/autologin.conf

    # Configure to run browser when X starts
    cp "${SCRIPT_DIR}/.xinitrc" ~/.xinitrc

    # Configure to run X on tty1
    cp "${SCRIPT_DIR}/.bash_profile" ~/.bash_profile
}

function install_nwjs() {
    sudo apt install apt-transport-https
    sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys DB348A58A292E9BC
    echo "deb https://repo.netsyms.com/apt main main" | sudo tee /etc/apt/sources.list.d/netsyms.list
    sudo apt update
    sudo apt install nw.js-normal
    mkdir -p ~/nwjs
    cp "${SCRIPT_DIR}/package.json" ~/nwjs
}

function configurePi() {
    sudo cp "${SCRIPT_DIR}/config.txt" /boot/config.txt
}

updateSystem
installService
installStatusBoard
installBrowser
install_nwjs
configurePi

echo "You may need to restart the system to apply some settings. Reboot now? (y/n)"
read -r response
if [[ "${response}" == "y" ]]; then
    sudo reboot
fi
