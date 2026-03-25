import { Locator, Page } from '@playwright/test';

class LogoutPage {
  page: Page;
  logout: Locator;

  constructor(page: Page) {
    this.page = page;

    this.logout = page.getByRole('button', { name: 'Logout' });
  }

  async logoutbtn() {
    await this.logout.click();
  }
}

export default LogoutPage;