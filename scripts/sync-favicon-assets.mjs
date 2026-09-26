import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const appDir = path.join(rootDir, 'src/app');

const icoPath = path.join(appDir, 'favicon.ico');
const buf = fs.readFileSync(icoPath);

const count = buf.readUInt16LE(4);
console.log(`Reading user's favicon.ico: found ${count} embedded images`);

const images = {};

for (let i = 0; i < count; i++) {
  const entryOffset = 6 + i * 16;
  const w = buf.readUInt8(entryOffset) || 256;
  const h = buf.readUInt8(entryOffset + 1) || 256;
  const size = buf.readUInt32LE(entryOffset + 8);
  const imgOffset = buf.readUInt32LE(entryOffset + 12);
  const imgData = buf.subarray(imgOffset, imgOffset + size);
  images[`${w}x${h}`] = imgData;
  console.log(`Found ${w}x${h} (${size} bytes)`);
}

// 1. Synchronize public/favicon.ico
fs.copyFileSync(icoPath, path.join(publicDir, 'favicon.ico'));
console.log('✓ Synchronized public/favicon.ico from src/app/favicon.ico');

// 2. Synchronize 16x16 and 32x32 PNGs
if (images['16x16']) {
  fs.writeFileSync(path.join(publicDir, 'favicon-16x16.png'), images['16x16']);
  console.log('✓ Updated public/favicon-16x16.png from ICO 16x16 entry');
}
if (images['32x32']) {
  fs.writeFileSync(path.join(publicDir, 'favicon-32x32.png'), images['32x32']);
  console.log('✓ Updated public/favicon-32x32.png from ICO 32x32 entry');
}

// 3. High-res source (256x256) for generating 180x180, 192x192, 512x512
const hiResBuffer = images['256x256'] || images['128x128'];
if (!hiResBuffer) {
  throw new Error('No high-res 256x256 or 128x128 image found in favicon.ico');
}

const tempHiResPath = path.join(__dirname, 'temp_user_256.png');
fs.writeFileSync(tempHiResPath, hiResBuffer);

// Generate apple-touch-icon.png (180x180)
execSync(`sips -z 180 180 "${tempHiResPath}" --out "${path.join(publicDir, 'apple-touch-icon.png')}"`);
console.log('✓ Generated public/apple-touch-icon.png (180x180)');

// Generate icon-192.png (192x192)
execSync(`sips -z 192 192 "${tempHiResPath}" --out "${path.join(publicDir, 'icon-192.png')}"`);
console.log('✓ Generated public/icon-192.png (192x192)');

// Generate icon-512.png (512x512)
execSync(`sips -z 512 512 "${tempHiResPath}" --out "${path.join(publicDir, 'icon-512.png')}"`);
console.log('✓ Generated public/icon-512.png (512x512)');

// 4. Update public/icon.svg and public/favicon.svg with embedded high-res image
const base64Png = hiResBuffer.toString('base64');
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="100%" height="100%">
  <image href="data:image/png;base64,${base64Png}" width="256" height="256"/>
</svg>
`;

fs.writeFileSync(path.join(publicDir, 'icon.svg'), svgContent.trim() + '\n');
fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgContent.trim() + '\n');
console.log('✓ Updated public/icon.svg and public/favicon.svg');

// Clean up temporary file
fs.unlinkSync(tempHiResPath);

console.log('All favicon assets synchronized with 100% fidelity to user-provided favicon.ico!');
