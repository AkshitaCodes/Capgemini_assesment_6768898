import { test, expect } from '@playwright/test';

test('Gmail Compose and Send via Keyboard Actions', async ({ page }) => {
    // 1. Open Gmail
    await page.goto('https://mail.google.com/',{timeout:30000});

    // Note: Authentication is required here. 
    // In a real test, use a saved storage state to bypass login.

    // 2. Click/Trigger Compose using Keyboard Action 'c'
    // We press 'c' to open the compose window
    await page.keyboard.press('c');

    // 3. Write a simple mail
    // Wait for the "To" field to appear and focus on it
    // Replace the old line with this:
await page.getByRole('textbox', { name: 'To' }).waitFor({ state: 'visible' });
await page.getByRole('textbox', { name: 'To' }).fill('recipient@example.com');
    await page.keyboard.press('Enter');

    // Tab to the Subject line
    await page.keyboard.press('Tab');
    await page.keyboard.type('Automated Test Email');

    // Tab to the Body
    await page.keyboard.press('Tab');
    await page.keyboard.type('Hello, this is a test email sent using Playwright keyboard actions!');

    // 4. Send it
    // The shortcut to send in Gmail is Ctrl + Enter (or Cmd + Enter on Mac)
    await page.keyboard.press('Control+Enter');

    // 5. Take a screenshot at last
    // Wait for a brief moment to ensure the "Message sent" toast appears
    await page.waitForTimeout(2000); 
    await page.screenshot({ path: 'gmail-sent-confirmation.png' });
});