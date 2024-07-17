# Run status-board on a Raspberry Pi

This folder contains scripts to configure a Pi to run the status board.
You can install a [Raspberry Pi OS 32bit Lite](https://www.raspberrypi.com/software/operating-systems/) (tested with raspbian **Bullseye**)
and use the [bootstrap.sh](bootstrap.sh) script to set it up:


## Install Raspberry Pi OS Lite (32bit) 
See: [https://www.raspberrypi.com/software/operating-systems/](https://www.raspberrypi.com/software/operating-systems/)

## Setup username, password, hostname and ssh during image creation with rpi-imager or on first start with
```shell
sudo raspi-config
```
Use username 'ssl'.   
Use hostname 'ssl-status-board-#'.

## Check architecture
```shell
dpkg --print-architecture
```
Architecture must be **armhf** cause of the used nwjs.


## Download and extract latest bootstrap archive
```shell
wget -qO- https://github.com/RoboCup-SSL/ssl-status-board/releases/latest/download/bootstrap.tar.gz | tar xvz
```
## Run bootstrap script
```shell
./ssl-status-board/bootstrap.sh
```

## Change hostname afterwards
Change hostname after cloning from a working SD-Card to avoid name resolution collisions with the old system.
```shell
sudo raspi-config # change hostname but don´t reboot
rm -rf ~/.config/nwjs/
rm -rf ./.config/ssl-status-board/
# reboot now
```
