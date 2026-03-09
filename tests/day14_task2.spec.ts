import { test, expect } from '@playwright/test';
test('Flipkart women shoes validation', async ({ page }) => {
  await page.goto('https://www.flipkart.com');
  await page.waitForTimeout(2000);
  const closeBtn = page.locator("//button[text()='✕']");
  if (await closeBtn.isVisible()) {
    await closeBtn.click();
  }
  await page.fill("//input[@name='q']", "shoes");
  await page.keyboard.press("Enter");
  await page.waitForTimeout(3000);
  const womenItems = page.locator("//*[contains(text(),'Women')]");
  await expect(womenItems.first()).toBeVisible();
  const count = await womenItems.count();
  await expect(count).toBeGreaterThan(0);
  await expect(page).toHaveTitle(/Shoes/);
  await expect(page).toHaveScreenshot({ maxDiffPixelRatio: 0.2 });

});