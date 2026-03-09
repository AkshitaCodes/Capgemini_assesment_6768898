import { test, expect } from '@playwright/test';
test('Login validation test', async ({ page }) => {
  await page.setDefaultTimeout(20000)
  await page.goto('https://demoapps.qspiders.com/ui/login');
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
  await page.getByPlaceholder('Enter your email').fill('test@gmail.com');
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await expect(page.getByRole('button', { name: 'Login' })).toBeEnabled();
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/dashboard|login/);
  await page.screenshot({path : ""})
})