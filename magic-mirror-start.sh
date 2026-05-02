#!/bin/bash

# Give the system time to boot
sleep 10

# Set display (needed for GUI apps like Chromium)
export DISPLAY=:0

# --- Start Backend ---
cd ~/MagicMirror
source ~/MagicMirror/.venv/bin/activate/python backend/main.py &

# --- Start Frontend ---
cd /MagicMirror/frontend
npm start &

# Wait a bit for servers to start
sleep 5

# --- Launch browser in kiosk mode ---
chromium-browser --kiosk http://localhost:3000
