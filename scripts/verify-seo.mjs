import fs from 'fs';

// Let's run a verification on the build outputs and HTML structure
async function verify() {
  console.log('--- Verifying Assets Existence ---');
  const requiredFiles = [
    'public/icon.svg',
    'public/favicon.svg',
    'public/favicon.ico',
    'public/apple-touch-icon.png',
    'public/icon-192.png',
    'public/icon-512.png',
    'public/favicon-32x32.png',
    'public/favicon-16x16.png',
    'public/og-image.png',
    'src/app/opengraph-image.png',
    'src/app/favicon.ico',
    'src/app/robots.ts',
    'src/app/sitemap.ts',
    'src/app/manifest.ts',
  ];

  let missing = 0;
  for (const file of requiredFiles) {
    if (fs.existsSync(file)) {
      const stat = fs.statSync(file);
      console.log(`✓ ${file} (${stat.size} bytes)`);
    } else {
      console.error(`✗ MISSING: ${file}`);
      missing++;
    }
  }

  if (missing > 0) {
    throw new Error(`${missing} files missing`);
  }

  console.log('\nAll required assets verified successfully.');
}

verify().catch((err) => {
  console.error(err);
  process.exit(1);
});
