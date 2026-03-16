import { test, expect } from '@playwright/test';

test('Fetch David Warner Rating', async ({ page }) => {

  await page.goto('https://www.icc-cricket.com/rankings/mens/player-rankings/odi/batting');

  const rating = await page.locator("//a[text()='David Warner']/ancestor::tr//td[last()]").textContent();

  console.log("David Warner Rating:", rating);

});