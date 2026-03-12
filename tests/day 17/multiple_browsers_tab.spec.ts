import { test, expect } from '@playwright/test';

test('Verify product details in new tab', async ({ page }) => {

  await page.goto('https://www.amazon.in');

  await page.locator('#twotabsearchtextbox').fill('Samsung Mobile');
  await page.keyboard.press('Enter');

  await page.waitForSelector('div.s-main-slot');

  const [newPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('div.s-main-slot div[data-component-type="s-search-result"] h2 a').first().click()
  ]);

  await newPage.waitForLoadState();

  const productTitle = await newPage.locator('#productTitle').textContent();
  console.log("Product Title:", productTitle);

  await expect(newPage.locator('#productTitle')).toBeVisible();

  await newPage.close();

  await page.bringToFront();
});