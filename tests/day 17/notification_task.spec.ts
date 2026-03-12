import { test, expect } from '@playwright/test';

test('Handle Justdial notification popup', async ({ browser }) => {

  const context = await browser.newContext({
    permissions: ['notifications']
  });

  const page = await context.newPage();

  await page.goto("https://www.justdial.com", { waitUntil: "domcontentloaded" });

  const result = await page.evaluate(() => Notification.requestPermission());
  console.log("Notification status:", result);

  const searchBox = page.getByPlaceholder("Search for Restaurants, Hotels, etc.");

  await searchBox.waitFor({ state: "visible" });

  await searchBox.fill("Restaurants");

  await page.keyboard.press("Enter");

  await expect(page).toHaveURL(/restaurants/i);

});