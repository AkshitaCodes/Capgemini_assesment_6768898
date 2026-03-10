import { test, expect } from '@playwright/test';

test('Search and select Bengaluru in LensKart Store Locator', async ({ page }) => {
  await page.goto('https://www.lenskart.com', { timeout: 30000 });


  const storeLocator = page.locator('//a[text()="StoreLocator"]');
  await storeLocator.click();

  await page.locator('//input[@placeholder="Search your city or area"]').fill('Bangalore');
  

  await page.locator('//li[contains(text(),"Bengaluru, Karnataka, India")]').click();
 
  // await expect(page).toHaveURL(/bengaluru/i);
  await page.screenshot({ path: '' });
});