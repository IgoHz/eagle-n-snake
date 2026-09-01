import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright-core';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const appDir = path.join(rootDir, 'src/app');

function createBmpIco(icons) {
  // icons: array of { width, height, rgbaBuffer }
  const count = icons.length;
  const headerSize = 6;
  const entrySize = 16;
  
  // Calculate total header offset
  let offset = headerSize + count * entrySize;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // 1 = ICO
  header.writeUInt16LE(count, 4);

  const entries = [];
  const imageBuffers = [];

  for (const item of icons) {
    const { width, height, rgbaBuffer } = item;
    
    // BITMAPINFOHEADER = 40 bytes
    const bihSize = 40;
    const xorSize = width * height * 4;
    const andRowBytes = Math.ceil(width / 32) * 4;
    const andSize = andRowBytes * height;

    const bih = Buffer.alloc(bihSize);
    bih.writeUInt32LE(bihSize, 0);
    bih.writeInt32LE(width, 4);
    bih.writeInt32LE(height * 2, 8); // Height is doubled for ICO (XOR + AND)
    bih.writeUInt16LE(1, 12); // Planes
    bih.writeUInt16LE(32, 14); // BitCount (32-bit BGRA)
    bih.writeUInt32LE(0, 16); // BI_RGB
    bih.writeUInt32LE(xorSize + andSize, 20); // ImageSize
    bih.writeInt32LE(0, 24);
    bih.writeInt32LE(0, 28);
    bih.writeUInt32LE(0, 32);
    bih.writeUInt32LE(0, 36);

    // Convert top-down RGBA to bottom-up BGRA
    const xorMask = Buffer.alloc(xorSize);
    for (let y = 0; y < height; y++) {
      const srcY = y;
      const dstY = height - 1 - y;
      for (let x = 0; x < width; x++) {
        const srcIdx = (srcY * width + x) * 4;
        const dstIdx = (dstY * width + x) * 4;
        const r = rgbaBuffer[srcIdx];
        const g = rgbaBuffer[srcIdx + 1];
        const b = rgbaBuffer[srcIdx + 2];
        const a = rgbaBuffer[srcIdx + 3];
        xorMask[dstIdx] = b;
        xorMask[dstIdx + 1] = g;
        xorMask[dstIdx + 2] = r;
        xorMask[dstIdx + 3] = a;
      }
    }

    // 1-bit AND mask (all transparent/0 because 32-bit alpha is used)
    const andMask = Buffer.alloc(andSize, 0);

    const imageBuffer = Buffer.concat([bih, xorMask, andMask]);
    imageBuffers.push(imageBuffer);

    // Entry
    const entry = Buffer.alloc(entrySize);
    entry.writeUInt8(width === 256 ? 0 : width, 0);
    entry.writeUInt8(height === 256 ? 0 : height, 1);
    entry.writeUInt8(0, 2); // Colors
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Planes
    entry.writeUInt16LE(32, 6); // BitCount
    entry.writeUInt32LE(imageBuffer.length, 8); // Size
    entry.writeUInt32LE(offset, 12); // Offset
    offset += imageBuffer.length;
    entries.push(entry);
  }

  return Buffer.concat([header, ...entries, ...imageBuffers]);
}

async function generateIco() {
  const browser = await chromium.launch({ channel: 'chrome' }).catch(() => chromium.launch());
  const page = await browser.newPage();

  const svg = fs.readFileSync(path.join(publicDir, 'icon.svg'), 'utf8');

  const resolutions = [16, 32, 48];
  const iconData = [];

  for (const size of resolutions) {
    await page.setViewportSize({ width: size, height: size });
    await page.setContent(`<!DOCTYPE html>
    <html>
      <head><style>* { margin:0; padding:0; } body { width:${size}px; height:${size}px; overflow:hidden; }</style></head>
      <body>
        <canvas id="c" width="${size}" height="${size}"></canvas>
        <script>
          const img = new Image();
          img.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(${JSON.stringify(svg)});
          img.onload = () => {
            const ctx = document.getElementById('c').getContext('2d');
            ctx.drawImage(img, 0, 0, ${size}, ${size});
            window.__done = true;
          };
        </script>
      </body>
    </html>`);

    await page.waitForFunction('window.__done === true');

    const rgbaArray = await page.evaluate((size) => {
      const ctx = document.getElementById('c').getContext('2d');
      const imgData = ctx.getImageData(0, 0, size, size);
      return Array.from(imgData.data);
    }, size);

    iconData.push({
      width: size,
      height: size,
      rgbaBuffer: Buffer.from(rgbaArray)
    });
  }

  await browser.close();

  const icoBuffer = createBmpIco(iconData);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);
  console.log('Successfully generated valid 32-bit BMP ICO format to public/favicon.ico and src/app/favicon.ico');
}

generateIco().catch((err) => {
  console.error(err);
  process.exit(1);
});
