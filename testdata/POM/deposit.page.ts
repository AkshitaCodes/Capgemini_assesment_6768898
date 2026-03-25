import { Locator, Page } from '@playwright/test';

class DepositPage {
  page: Page;
  deposit: Locator;
  amountdeposit: Locator;
  depositbtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.deposit = page.getByRole('button', { name: 'Deposit' });
    this.amountdeposit = page.getByPlaceholder('amount');
    this.depositbtn = page.locator('form').getByRole('button', { name: 'Deposit' });
  }

  async Deposit() {
    await this.deposit.click();
  }

  async amountdepositbtn() {
    // let amountdepo = Number(1000)
    await this.amountdeposit.fill("1000");
  }

  async Depositbtn() {
    await this.depositbtn.click();
  }
}

export default DepositPage;