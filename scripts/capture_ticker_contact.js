/* eslint-disable @typescript-eslint/no-require-imports */
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const OUTPUT_DIR = '/Users/cristianvaduva/.gemini/antigravity-ide/brain/30d3174e-987c-4579-9910-c1bc394716af/screenshots';

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function run() {
  console.log('Launching browser via Playwright with Google Chrome...');
  const browser = await chromium.launch({
    executablePath: CHROME_PATH,
    headless: true,
  });

  const BASE_URL = 'http://localhost:3000';

  // 1. Homepage Desktop (1440x900)
  {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await page.waitForTimeout(400);
    const p = path.join(OUTPUT_DIR, '1_homepage_desktop_ticker_contact.png');
    await page.screenshot({ path: p, fullPage: false });
    console.log(`✓ Saved: ${p}`);
    await page.close();
  }

  // 2. Homepage Mobile (390x844)
  {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await page.waitForTimeout(400);
    const p = path.join(OUTPUT_DIR, '2_homepage_mobile_ticker_contact.png');
    await page.screenshot({ path: p, fullPage: false });
    console.log(`✓ Saved: ${p}`);
    await page.close();
  }

  // 3. Properties Desktop (1440x900)
  {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto(`${BASE_URL}/properties`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(400);
    const p = path.join(OUTPUT_DIR, '3_properties_desktop_ticker_contact.png');
    await page.screenshot({ path: p, fullPage: false });
    console.log(`✓ Saved: ${p}`);
    await page.close();
  }

  // 4. Properties Mobile (390x844)
  {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await page.goto(`${BASE_URL}/properties`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(400);
    const p = path.join(OUTPUT_DIR, '4_properties_mobile_ticker_contact.png');
    await page.screenshot({ path: p, fullPage: false });
    console.log(`✓ Saved: ${p}`);
    await page.close();
  }

  // 5. Private Client Desktop (1440x900)
  {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto(`${BASE_URL}/private-client`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(400);
    const p = path.join(OUTPUT_DIR, '5_private_client_desktop.png');
    await page.screenshot({ path: p, fullPage: false });
    console.log(`✓ Saved: ${p}`);
    await page.close();
  }

  // 6. Contact Modal Desktop (1440x900)
  {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await page.waitForTimeout(400);
    await page.locator('button:has-text("Contact Desk")').first().click();
    await page.waitForSelector('#contact-modal-title', { state: 'visible', timeout: 5000 });
    await page.waitForTimeout(300);
    const p = path.join(OUTPUT_DIR, '6_contact_modal_desktop.png');
    await page.screenshot({ path: p, fullPage: false });
    console.log(`✓ Saved: ${p}`);
    await page.close();
  }

  // 7. Contact Modal Mobile (390x844)
  {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await page.waitForTimeout(400);
    // Find the mobile contact button
    const mobileBtn = page.locator('div.sm\\:hidden button').first();
    await mobileBtn.click();
    await page.waitForSelector('#contact-modal-title', { state: 'visible', timeout: 5000 });
    await page.waitForTimeout(300);
    const p = path.join(OUTPUT_DIR, '7_contact_modal_mobile.png');
    await page.screenshot({ path: p, fullPage: false });
    console.log(`✓ Saved: ${p}`);
    await page.close();
  }

  await browser.close();
  console.log('All 7 screenshots captured successfully!');
}

run().catch((err) => {
  console.error('Error during screenshot capture:', err);
  process.exit(1);
});
