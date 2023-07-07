# Run status-board on a Raspberry Pi

This folder contains scripts to configure a Pi to run the status board.
You can install a [Raspberry Pi OS Lite](https://www.raspberrypi.com/software/operating-systems/)
and use the [bootstrap.sh](bootstrap.sh) script to set it up:


## Install Raspberry Pi OS Lite (32bit) 
See: [https://www.raspberrypi.com/software/operating-systems/](https://www.raspberrypi.com/software/operating-systems/)

## Setup username, password, hostname and ssh during image creation with rpi-imager or on first start with
```shell
sudo raspi-config
```
Use username 'ssl'.

## Download and extract latest bootstrap archive
```shell
wget -qO- https://github.com/RoboCup-SSL/ssl-status-board/releases/latest/download/bootstrap.tar.gz | tar xvz
```
## Run bootstrap script
```shell
./ssl-status-board/bootstrap.sh
```
