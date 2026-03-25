import { Locator, Page, expect } from '@playwright/test';

class BalancePage {
  page: Page;
  balance: Locator;

  constructor(page: Page) {
    this.page = page;

    this.balance = page.locator('//strong[@class="ng-binding"]').nth(1);
  }

  async getBalance(): Promise<number> {
    const text = await this.balance.textContent();
    return Number(text);
  }

  async validateBalance(expected: number) {
    await expect(this.balance).toHaveText(String(expected));
  }
}

export default BalancePage;