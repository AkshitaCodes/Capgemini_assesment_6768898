import { Locator, Page } from '@playwright/test';

class CustomerLoginPage {
  page: Page;
  customerlogin: Locator;
  yourname: Locator;
  loginBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.customerlogin = page.getByRole('button', { name: 'Customer Login' });
    this.yourname = page.locator('#userSelect');
    this.loginBtn = page.getByRole('button', { name: 'Login' });
  }

  async customerLoginPage() {
    await this.customerlogin.click();
  }

  async yournamebtn() {
    await this.yourname.selectOption("Akshita Jain");
  }

  async clickLogin() {
    await this.loginBtn.click();
  }
}

export default CustomerLoginPage;