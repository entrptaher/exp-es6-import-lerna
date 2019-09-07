import greet from '@automatio/chrome-shared';
import puppeteer from 'puppeteer';
import fs from 'fs';

// TODO: import until we write the .d.ts file for driver
import driver from '@automatio/driver';

console.log(greet('Taher'));

const driverPath = require.resolve('@automatio/driver/build');
const builtDriver = fs.readFileSync(driverPath, 'utf-8');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.evaluateOnNewDocument(builtDriver);
  await page.goto('https://example.com');
  const location = await page.evaluate(()=> driver.getLocation());
  console.log(location)
  await browser.close();
})();