#!/usr/bin/env node

/**
 * tools/screenshot-walkthrough.js
 *
 * Usage:
 * 1. npm install (ensure puppeteer is installed)
 * 2. npm run dev (start the app on http://localhost:3000)
 * 3. npm run screenshots
 *
 * This script opens the local dev server and captures desktop and mobile
 * screenshots for a short walkthrough. It saves PNG files under ./screenshots.
 *
 * To stitch a GIF from the screenshots, use ImageMagick or gifsicle. A helper
 * script `tools/make-gif.sh` is included.
 */

import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";

const OUT_DIR = path.resolve(process.cwd(), "screenshots");
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const HOST = process.env.APP_URL || "http://localhost:3000";

const pages = [
  { slug: "/", name: "home" },
  { slug: "/auth/signin", name: "signin" },
  { slug: "/auth/signup", name: "signup" },
  { slug: "/auth/forgot-password", name: "forgot" },
  { slug: "/dashboard", name: "dashboard" },
  { slug: "/dashboard/files", name: "files" },
  { slug: "/dashboard/notes", name: "notes" },
  { slug: "/dashboard/messages", name: "messages" },
  { slug: "/dashboard/profile", name: "profile" }
];

const viewports = [
  { name: "desktop", width: 1366, height: 768 },
  { name: "tablet", width: 1024, height: 768 },
  { name: "mobile", width: 375, height: 812 }
];

(async () => {
  console.log("Launching headless browser...");
  const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox", "--disable-setuid-sandbox"] });
  const page = await browser.newPage();

  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height });
    for (const p of pages) {
      const url = `${HOST}${p.slug}`;
      const filename = `${String(pages.indexOf(p) + 1).padStart(2, "0")}_${p.name}_${vp.name}.png`;
      const outPath = path.join(OUT_DIR, filename);

      try {
        console.log(`Capturing: ${url} @ ${vp.name} -> ${filename}`);
        const res = await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });
        if (!res || !res.ok()) {
          console.warn(`Warning: response status ${res ? res.status() : "no response"} for ${url}`);
        }

        // small delay to allow animations to settle
        await page.waitForTimeout(600);

        // For pages that may have sticky headers, scroll a little to reveal content
        await page.evaluate(() => window.scrollTo({ top: 80, behavior: "instant" }));
        await page.screenshot({ path: outPath, fullPage: true });
      } catch (err) {
        console.error(`Failed to capture ${url}:`, err.message || err);
      }
    }
  }

  await browser.close();
  console.log(`Done. Screenshots saved to ${OUT_DIR}`);
  console.log("To create an animated GIF from the desktop screenshots, run: ./tools/make-gif.sh");
})();
