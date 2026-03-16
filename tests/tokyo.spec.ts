import { test, expect } from '@playwright/test';

test('Validate basic xpath on Tokyo Olympics URL', async ({ page }) => {

  test.setTimeout(60000);

  // 1️⃣ Launch URL
  await page.goto('https://olympics.com/en/olympic-games/tokyo-2020', {
    waitUntil: 'domcontentloaded'
  });

  // 2️⃣ Scroll down
  await page.mouse.wheel(0, 3000);

  // 3️⃣ Click on Medal Table
  await page.click('//a[contains(text(),"Medal")]');

  // Wait for medal table page
  await page.waitForURL('**medals**');

  // 4️⃣ Fetch Silver Medal count of Armenia

  const silverMedal = await page.locator(
    '//span[text()="Armenia"]/ancestor::tr/td[3]'
  ).textContent();

  console.log("Silver medals of Armenia:", silverMedal);

});