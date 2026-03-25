import { expect, Locator, Page } from '@playwright/test';

class WithdrawPage {
  page: Page;
  withdrawl: Locator;
  amountwithdrawl: Locator;
  withdrawlbtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.withdrawl = page.locator('[ng-click="withdrawl()"]')
    this.amountwithdrawl = page.getByPlaceholder('amount');
    this.withdrawlbtn = page.locator('.btn.btn-default');
  }

  async Withdrawl() {
    await this.withdrawl.click();
    await this.amountwithdrawl.waitFor({ state: 'visible' });
  }

  async amountwithdrawlbtn() {
    // let amount=Number(500)
    await this.amountwithdrawl.fill("500");
  }

  async Withdrawlbtn() {
    await this.withdrawlbtn.click();
  }
}

export default WithdrawPage;