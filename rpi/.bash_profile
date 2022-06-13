if [ -z $DISPLAY ] && [ $(tty) = /dev/tty1 ]
then
  set -e
  while true; do
    startx
  done
fi
