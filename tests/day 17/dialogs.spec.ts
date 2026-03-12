import { test, expect } from '@playwright/test';

test('Handle Alert Confirm and Prompt dialogs', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.once('dialog', async dialog => {
    await dialog.accept();
  });
  await page.locator('text=Click for JS Alert').click();
  await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');

  page.once('dialog', async dialog => {
    await dialog.dismiss();
  });
  await page.locator('text=Click for JS Confirm').click();
  await expect(page.locator('#result')).toHaveText('You clicked: Cancel');

  page.once('dialog', async dialog => {
    await dialog.accept('Playwright Testing');
  });
  await page.locator('text=Click for JS Prompt').click();
  await expect(page.locator('#result')).toHaveText('You entered: Playwright Testing');

});