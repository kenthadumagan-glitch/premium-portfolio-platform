Screenshots and GIF walkthrough

This folder contains a small script to capture screenshots of the running app and a helper to build a GIF.

How to use

1. Make sure you have the app running locally:
   npm install
   npm run dev

2. Install dev dependencies (puppeteer is included in devDependencies):
   npm install

3. Capture screenshots:
   npm run screenshots

4. Optionally create a GIF (requires ImageMagick):
   ./tools/make-gif.sh

Output
- Screenshots are saved to ./screenshots as PNG files. Filenames include an index, the page name, and the viewport (desktop/tablet/mobile).
- The GIF generator will combine the desktop frames into screenshots/walkthrough-desktop.gif

Notes
- Puppeteer runs headless by default. If you need to debug, open the script and change launch({ headless: true }) to headless: false.
- If your dev server runs on a different host/port, set APP_URL before running the script, e.g.:
  APP_URL=http://localhost:3001 npm run screenshots
