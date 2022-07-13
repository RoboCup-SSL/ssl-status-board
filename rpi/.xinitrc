#!/usr/bin/env sh
xset -dpms
# Disable screensaver
xset s off
xset s noblank

# Hide mouse pointer
unclutter -idle 0 &

# reduce resolution to fix scaling issues with TVs at RC22
xrandr --output HDMI-1 --mode 1024x768

# Start browser in kiosk mode
chromium-browser http://localhost:8082 --start-fullscreen --kiosk --incognito --noerrdialogs --no-first-run --disk-cache-dir=/dev/null
