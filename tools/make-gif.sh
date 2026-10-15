#!/usr/bin/env bash

# tools/make-gif.sh
# Requires ImageMagick `convert` available in PATH.
# This script stitches desktop screenshots into a looping GIF.

OUT_DIR="screenshots"
GIF_OUT="screenshots/walkthrough-desktop.gif"

if [ ! -d "$OUT_DIR" ]; then
  echo "No screenshots directory found. Run npm run screenshots first.";
  exit 1
fi

# Select desktop images in numerical order
IMAGES=($(ls $OUT_DIR/*_desktop.png 2>/dev/null | sort))
if [ ${#IMAGES[@]} -eq 0 ]; then
  echo "No desktop images found (pattern: *_desktop.png).";
  exit 1
fi

# Resize frames, set delay (10 = 1s), and create optimized GIF
convert -delay 60 -loop 0 "${IMAGES[@]}" -layers Optimize "$GIF_OUT"

echo "GIF created at $GIF_OUT"
