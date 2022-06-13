# Run status-board on a Raspberry Pi

This folder contains scripts to configure a Pi to run the status board.
You can install a [Raspberry Pi OS Lite](https://www.raspberrypi.com/software/operating-systems/)
and use the [bootstrap.sh](bootstrap.sh) script to set it up:

```shell
# Install Raspberry Pi OS Lite (32bit) (https://www.raspberrypi.com/software/operating-systems/)
# Setup username, password, hostname, ssh and autologin (without desktop) with
sudo raspi-config
# Download and extract latest bootstrap archive
wget -qO- https://github.com/RoboCup-SSL/ssl-status-board/releases/latest/download/bootstrap.tar.gz | tar xvz
# Run bootstrap script
./rpi/bootstrap.sh
```
