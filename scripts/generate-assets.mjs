import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright-core';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const appDir = path.join(rootDir, 'src/app');

// 1. Generate crisp, sharp, aggressive deathcore/black-metal Eagle + Serpent vector SVG
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <rect width="512" height="512" fill="#050505" rx="80"/>
  <!-- Subtle border outline -->
  <rect x="16" y="16" width="480" height="480" fill="none" stroke="#1f1f1f" stroke-width="6" rx="68"/>
  
  <g transform="translate(256, 256)">
    <!-- Geometric Radial Crosshairs / Occult Axis Marks -->
    <line x1="0" y1="-232" x2="0" y2="-200" stroke="#7a7772" stroke-width="4" stroke-linecap="square"/>
    <line x1="0" y1="200" x2="0" y2="232" stroke="#7a7772" stroke-width="4" stroke-linecap="square"/>
    <line x1="-232" y1="0" x2="-200" y2="0" stroke="#7a7772" stroke-width="4" stroke-linecap="square"/>
    <line x1="200" y1="0" x2="232" y2="0" stroke="#7a7772" stroke-width="4" stroke-linecap="square"/>

    <!-- Sharp Diamond Halo / Radiant Apex -->
    <polygon points="0,-218 16,-180 0,-190 -16,-180" fill="#e6e1da"/>
    
    <!-- Eagle Wings (Aggressive, Dagger-like Plumes) -->
    <!-- Left Wing -->
    <path d="M-15,-60 L-75,-175 L-48,-100 L-125,-155 L-82,-75 L-175,-118 L-115,-45 L-205,-78 L-135,-15 L-185,22 L-105,15 L-150,72 L-85,45 L-115,122 L-52,70 L-42,112 L-20,60 Z" fill="#dcd6cd"/>
    
    <!-- Right Wing -->
    <path d="M15,-60 L75,-175 L48,-100 L125,-155 L82,-75 L175,-118 L115,-45 L205,-78 L135,-15 L185,22 L105,15 L150,72 L85,45 L115,122 L52,70 L42,112 L20,60 Z" fill="#dcd6cd"/>

    <!-- Eagle Crown & Sharp Hooked Beak (Facing Apex) -->
    <path d="M0,-170 C-26,-170 -42,-142 -42,-110 C-42,-85 -20,-70 0,-60 C20,-70 42,-85 42,-110 C42,-142 26,-170 0,-170 Z" fill="#050505"/>
    <path d="M-32,-148 L0,-190 L32,-148 L20,-115 L48,-120 L16,-85 L0,-65 L-16,-85 L-48,-120 L-20,-115 Z" fill="#e6e1da"/>
    <!-- Razor Hooked Beak -->
    <path d="M-6,-118 L12,-118 L28,-100 L18,-95 L8,-98 L0,-82 L-8,-98 L-18,-95 L-28,-100 L-12,-118 Z" fill="#050505"/>
    <path d="M0,-152 L12,-125 L0,-102 L-12,-125 Z" fill="#dcd6cd"/>

    <!-- Intertwined Serpent Body (Coiling upward through the eagle) -->
    <!-- Serpent Hood & Coils -->
    <path d="M0,-35 C-65,-35 -90,15 -80,62 C-70,105 -22,118 0,138 C22,118 70,105 80,62 C90,15 65,-35 0,-35 Z" fill="#050505" stroke="#dcd6cd" stroke-width="14" stroke-linejoin="miter"/>
    
    <!-- Inner Serpent Coil Ring (Ouroboric Void) -->
    <path d="M0,0 C-36,0 -52,25 -46,55 C-40,82 -16,98 0,108 C16,98 40,82 46,55 C52,25 36,0 0,0 Z" fill="#050505"/>
    
    <!-- Serpent Spine / Ribs (Sharp aggressive Chevron ribs) -->
    <path d="M-26,25 L0,42 L26,25 L20,36 L0,52 L-20,36 Z" fill="#e6e1da"/>
    <path d="M-30,55 L0,72 L30,55 L24,66 L0,82 L-24,66 Z" fill="#e6e1da"/>
    <path d="M-24,85 L0,100 L24,85 L18,96 L0,110 L-18,96 Z" fill="#e6e1da"/>

    <!-- Serpent Head (Emerging at bottom / biting upward) -->
    <path d="M0,138 L-28,180 L-14,190 L-32,222 L0,200 L32,222 L14,190 L28,180 Z" fill="#e6e1da"/>
    <!-- Serpent Eyes & Split Venom Fang -->
    <polygon points="-14,180 -7,175 -9,186" fill="#050505"/>
    <polygon points="14,180 7,175 9,186" fill="#050505"/>
    <polygon points="0,195 -6,232 -2,232 0,210 2,232 6,232" fill="#e6e1da"/>
    
    <!-- Central Solar Spark -->
    <polygon points="0,-12 5,-4 14,0 5,4 0,12 -5,4 -14,0 -5,-4" fill="#e6e1da"/>
  </g>
</svg>`;

// Write raw SVG icons
fs.writeFileSync(path.join(publicDir, 'icon.svg'), faviconSvg.trim());
fs.writeFileSync(path.join(publicDir, 'favicon.svg'), faviconSvg.trim());
console.log('Wrote public/icon.svg and public/favicon.svg');

// Generate Open Graph image HTML and PNG icons using Playwright
async function generateAllAssets() {
  const browser = await chromium.launch({ channel: 'chrome' }).catch(() => chromium.launch());
  const page = await browser.newPage();

  // 1. Render raster icon sizes from SVG
  const sizes = [
    { name: 'apple-touch-icon.png', size: 180, dest: [publicDir] },
    { name: 'icon-192.png', size: 192, dest: [publicDir] },
    { name: 'icon-512.png', size: 512, dest: [publicDir] },
    { name: 'favicon-32x32.png', size: 32, dest: [publicDir] },
    { name: 'favicon-16x16.png', size: 16, dest: [publicDir] }
  ];

  for (const item of sizes) {
    await page.setViewportSize({ width: item.size, height: item.size });
    await page.setContent(`<!DOCTYPE html>
    <html>
      <head>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { background: transparent; width: ${item.size}px; height: ${item.size}px; overflow: hidden; display: flex; }
          svg { width: 100%; height: 100%; }
        </style>
      </head>
      <body>${faviconSvg}</body>
    </html>`);

    for (const targetDir of item.dest) {
      const targetPath = path.join(targetDir, item.name);
      await page.screenshot({ path: targetPath, omitBackground: false });
      console.log(`Generated: ${targetPath}`);
    }
  }

  // 2. Render Open Graph Image (1200 x 630)
  const creatureBase64 = fs.readFileSync(path.join(publicDir, 'assets/creature/hero-eagle-n-snake.png')).toString('base64');
  const paperNoiseBase64 = fs.readFileSync(path.join(publicDir, 'assets/textures/paper-noise.png')).toString('base64');
  const metalNoiseBase64 = fs.readFileSync(path.join(publicDir, 'assets/textures/scratched-metal.png')).toString('base64');

  await page.setViewportSize({ width: 1200, height: 630 });
  await page.setContent(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;900&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Geist+Mono:wght@400;600&family=Geist:wght@400;600;700&display=swap" rel="stylesheet">
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          width: 1200px;
          height: 630px;
          background: #050505;
          color: #dcd6cd;
          font-family: 'Geist', -apple-system, BlinkMacSystemFont, sans-serif;
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Atmospheric vignette */
        .bg-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 68% 48%, rgba(210, 195, 170, 0.09) 0%, rgba(10, 10, 10, 0.8) 55%, #050505 85%);
          z-index: 1;
        }

        /* Subtle distressed texture blend */
        .texture-layer {
          position: absolute;
          inset: 0;
          background-image: url('data:image/png;base64,${paperNoiseBase64}');
          background-repeat: repeat;
          opacity: 0.12;
          mix-blend-mode: screen;
          z-index: 2;
          pointer-events: none;
        }

        .metal-layer {
          position: absolute;
          inset: 0;
          background-image: url('data:image/png;base64,${metalNoiseBase64}');
          background-size: cover;
          opacity: 0.08;
          mix-blend-mode: screen;
          z-index: 3;
          pointer-events: none;
        }

        /* Outer framing border with corner markers */
        .frame-box {
          position: absolute;
          inset: 28px;
          border: 1px solid #222222;
          z-index: 10;
          pointer-events: none;
        }

        .corner-cross {
          position: absolute;
          width: 15px;
          height: 15px;
          color: #7a7772;
          font-family: 'Geist Mono', monospace;
          font-size: 16px;
          line-height: 15px;
          text-align: center;
          user-select: none;
        }
        .top-left { top: -8px; left: -8px; }
        .top-right { top: -8px; right: -8px; }
        .bottom-left { bottom: -8px; left: -8px; }
        .bottom-right { bottom: -8px; right: -8px; }

        /* Inner Content Grid */
        .content-container {
          position: relative;
          z-index: 20;
          width: 100%;
          height: 100%;
          padding: 60px 70px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* Left Editorial Column */
        .editorial-col {
          flex: 1;
          max-width: 580px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          z-index: 25;
        }

        .header-tag {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: 'Geist Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.22em;
          color: #c8b99d;
          text-transform: uppercase;
        }

        .tag-bullet {
          width: 6px;
          height: 6px;
          background: #c8b99d;
        }

        .title-block {
          margin: auto 0;
        }

        .main-title {
          font-family: 'Cinzel', serif;
          font-weight: 900;
          font-size: 60px;
          line-height: 1.02;
          letter-spacing: -0.02em;
          color: #e6e1da;
          text-transform: uppercase;
          margin-bottom: 22px;
          text-shadow: 0 0 40px rgba(230, 225, 218, 0.15);
        }

        .accent-word {
          color: #c8b99d;
          font-style: normal;
        }

        .quote-block {
          border-left: 2px solid #333333;
          padding-left: 18px;
          margin-top: 8px;
        }

        .quote-text {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 22px;
          line-height: 1.25;
          color: #beb8ae;
        }

        .author-line {
          font-family: 'Geist Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.15em;
          color: #7a7772;
          text-transform: uppercase;
          margin-top: 8px;
        }

        .footer-tag {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: 'Geist Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.18em;
          color: #555555;
          text-transform: uppercase;
          border-top: 1px solid #1a1a1a;
          padding-top: 16px;
        }

        /* Right Artwork Column */
        .artwork-col {
          position: relative;
          width: 480px;
          height: 520px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Background sacred geometry in artwork column */
        .geometric-axis {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }

        .axis-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px dashed rgba(220, 214, 205, 0.12);
        }
        .ring-1 { width: 440px; height: 440px; }
        .ring-2 { width: 320px; height: 320px; border-style: solid; border-color: rgba(220, 214, 205, 0.08); }
        .ring-3 { width: 180px; height: 180px; border-style: solid; border-color: rgba(200, 185, 157, 0.15); }

        .creature-img {
          position: relative;
          z-index: 10;
          height: 96%;
          max-width: 100%;
          object-fit: contain;
          filter: invert(1) brightness(0.98) contrast(1.2) drop-shadow(0 0 35px rgba(220,214,205,0.08));
          mix-blend-mode: screen;
        }
      </style>
    </head>
    <body>
      <div class="bg-glow"></div>
      <div class="texture-layer"></div>
      <div class="metal-layer"></div>
      
      <div class="frame-box">
        <span class="corner-cross top-left">+</span>
        <span class="corner-cross top-right">+</span>
        <span class="corner-cross bottom-left">+</span>
        <span class="corner-cross bottom-right">+</span>
      </div>

      <div class="content-container">
        <div class="editorial-col">
          <div class="header-tag">
            <span class="tag-bullet"></span>
            <span>EAGLE + SERPENT // ARCHIVE</span>
          </div>

          <div class="title-block">
            <h1 class="main-title">BECOME<br>WHO YOU<br><span class="accent-word">ARE.</span></h1>
            <div class="quote-block">
              <p class="quote-text">“The proudest animal under the sun, and the wisest animal under the sun.”</p>
              <p class="author-line">Friedrich Nietzsche / Zarathustra</p>
            </div>
          </div>

          <div class="footer-tag">
            <span>PHILOSOPHICAL ARTIFACT</span>
            <span>01 — OVERMAN</span>
          </div>
        </div>

        <div class="artwork-col">
          <div class="geometric-axis">
            <div class="axis-ring ring-1"></div>
            <div class="axis-ring ring-2"></div>
            <div class="axis-ring ring-3"></div>
          </div>
          <img class="creature-img" src="data:image/png;base64,${creatureBase64}" alt="Eagle and Serpent Creature" />
        </div>
      </div>
    </body>
  </html>`);

  // Wait for Google Fonts to load
  await page.evaluateHandle('document.fonts.ready');
  await page.waitForTimeout(300);

  // Write OG images to public and app
  const ogPublicPath = path.join(publicDir, 'og-image.png');
  const ogAppPath = path.join(appDir, 'opengraph-image.png');
  await page.screenshot({ path: ogPublicPath });
  await page.screenshot({ path: ogAppPath });
  console.log(`Generated OG Image: ${ogPublicPath}`);
  console.log(`Generated OG Image: ${ogAppPath}`);

  await browser.close();
  console.log('All icons and Open Graph assets generated successfully!');
}

generateAllAssets().catch((err) => {
  console.error(err);
  process.exit(1);
});
