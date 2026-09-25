/* eslint-disable @typescript-eslint/no-require-imports */
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const OUTPUT_DIR = '/Users/cristianvaduva/.gemini/antigravity-ide/brain/949f28c9-79d1-4018-9c9d-697b37acae89/real_browser_screenshots';

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const VIEWPORTS = [
  { name: '1440', width: 1440, height: 900 },
  { name: '1280', width: 1280, height: 800 },
  { name: '1024', width: 1024, height: 768 },
  { name: '768', width: 768, height: 1024 },
  { name: '430', width: 430, height: 932 },
  { name: '390', width: 390, height: 844 },
  { name: '375', width: 375, height: 812 },
];

const ROUTES = [
  { name: 'home', path: '/' },
  { name: 'properties', path: '/properties' },
  { name: 'property_detail', path: '/properties/prop-one-palm-01' },
  { name: 'investment', path: '/investment' },
  { name: 'market', path: '/market' },
  { name: 'residency', path: '/residency' },
  { name: 'buying_guide', path: '/buying-guide' },
  { name: 'areas', path: '/areas' },
  { name: 'developers', path: '/developers' },
  { name: 'projects', path: '/projects' },
  { name: 'lifestyle', path: '/lifestyle' },
  { name: 'network', path: '/network' },
  { name: 'private_client', path: '/private-client' },
  { name: 'client', path: '/client' },
];

console.log('Starting real browser screenshot capture...');

for (const route of ROUTES) {
  for (const vp of VIEWPORTS) {
    const filename = `${route.name}_${vp.name}.png`;
    const filepath = path.join(OUTPUT_DIR, filename);
    const url = `http://localhost:3030${route.path}`;
    
    console.log(`Capturing: ${route.name} @ ${vp.name} (${vp.width}x${vp.height}) -> ${filename}`);
    
    try {
      const cmd = `"${CHROME_PATH}" --headless --disable-gpu --window-size=${vp.width},${vp.height} --screenshot="${filepath}" "${url}"`;
      execSync(cmd, { stdio: 'pipe', timeout: 15000 });
      if (fs.existsSync(filepath)) {
        const stats = fs.statSync(filepath);
        console.log(`  ✓ Saved: ${stats.size} bytes`);
      }
    } catch (err) {
      console.error(`  ✗ Error capturing ${filename}:`, err.message);
    }
  }
}

console.log('Finished capturing all real browser screenshots.');
