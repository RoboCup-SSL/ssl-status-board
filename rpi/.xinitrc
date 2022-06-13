#!/usr/bin/env sh
xset -dpms
# Disable screensaver
xset s off
xset s noblank

# Hide mouse pointer
unclutter -idle 0 &

# Start browser in kiosk mode
chromium-browser http://localhost:8082 --start-fullscreen --kiosk --incognito --noerrdialogs --no-first-run --disk-cache-dir=/dev/null
