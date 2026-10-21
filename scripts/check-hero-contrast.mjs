// Measures hero text contrast against the rendered photo + wash.
// Hides the hero text, screenshots the hero, then checks every pixel under each text line box.
// Usage: NODE_PATH=<dir containing playwright-core> node scripts/check-hero-contrast.mjs [url] [widths]
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright-core");
const sharp = require("sharp");

const url = process.argv[2] ?? "http://localhost:3000/";
const SIZES = { 390: 844, 768: 1024, 1440: 900, 1920: 1080 };
const widths = process.argv[3] ? process.argv[3].split(",").map(Number) : Object.keys(SIZES).map(Number);
const MIN = 4.5;

const WHITE = [255, 255, 255];
const MINT = [0x5f, 0xd8, 0xae];
const TARGETS = [
  { name: "eyebrow", selector: "#top .hero-rise > p:first-child", color: WHITE, alpha: 0.88 },
  { name: "headline line 1", selector: "#top h1 > span:first-child", color: WHITE, alpha: 1 },
  { name: "headline line 2", selector: "#top h1 > span:last-child", color: MINT, alpha: 1 },
  { name: "subline", selector: "#top h1 + p", color: WHITE, alpha: 0.92 },
  { name: "primary button", selector: "#top a.btn-primary", color: WHITE, alpha: 1 },
  { name: "secondary button", selector: "#top button.btn-notch-outline", color: WHITE, alpha: 1 },
  { name: "trust values", selector: "#top li > span:first-child", color: WHITE, alpha: 1 },
  { name: "trust labels", selector: "#top li > span:last-child", color: WHITE, alpha: 0.88 },
];

const lin = (c) => {
  const s = c / 255;
  return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
};
const lum = ([r, g, b]) => 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
const ratio = (a, b) => {
  const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

const browser = await chromium.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
});

let failures = 0;
for (const w of widths) {
  const page = await browser.newPage({ viewport: { width: w, height: SIZES[w] }, deviceScaleFactor: 1 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(url, { waitUntil: "load" });
  await page.waitForFunction(() => {
    const img = document.querySelector("#top img");
    return img && img.complete && img.naturalWidth > 0;
  });
  await page.waitForTimeout(400);

  const hero = await page.evaluate(() => {
    const r = document.querySelector("#top").getBoundingClientRect();
    return { x: r.x, y: r.y + window.scrollY };
  });
  const rects = await page.evaluate((targets) => {
    return targets.map((t) => {
      const boxes = [];
      for (const el of document.querySelectorAll(t.selector)) {
        const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
        while (walker.nextNode()) {
          const node = walker.currentNode;
          if (!node.textContent.trim()) continue;
          const range = document.createRange();
          range.selectNodeContents(node);
          for (const b of range.getClientRects()) {
            boxes.push({ x: b.x, y: b.y + window.scrollY, w: b.width, h: b.height });
          }
        }
      }
      return boxes;
    });
  }, TARGETS.map(({ selector }) => ({ selector })));

  await page.addStyleTag({
    content: "#top *{color:transparent!important;text-shadow:none!important} #top svg{visibility:hidden} nextjs-portal{display:none!important}",
  });
  await page.waitForTimeout(100);
  const shot = await page.locator("#top").screenshot();
  const { data, info } = await sharp(shot).removeAlpha().raw().toBuffer({ resolveWithObject: true });

  console.log(`\n${w}px`);
  TARGETS.forEach((t, i) => {
    let worst = Infinity;
    for (const b of rects[i]) {
      const x0 = Math.max(0, Math.floor(b.x - hero.x));
      const y0 = Math.max(0, Math.floor(b.y - hero.y));
      const x1 = Math.min(info.width, Math.ceil(b.x - hero.x + b.w));
      const y1 = Math.min(info.height, Math.ceil(b.y - hero.y + b.h));
      for (let y = y0; y < y1; y++) {
        for (let x = x0; x < x1; x++) {
          const o = (y * info.width + x) * 3;
          const bg = [data[o], data[o + 1], data[o + 2]];
          const fg = t.color.map((c, k) => c * t.alpha + bg[k] * (1 - t.alpha));
          worst = Math.min(worst, ratio(fg, bg));
        }
      }
    }
    const ok = worst >= MIN;
    if (!ok) failures++;
    console.log(`  ${ok ? "PASS" : "FAIL"}  ${t.name.padEnd(18)} ${worst === Infinity ? "n/a" : worst.toFixed(2)}:1`);
  });
  await page.close();
}

await browser.close();
process.exitCode = failures ? 1 : 0;
