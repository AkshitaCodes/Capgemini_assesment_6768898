import { expect, Locator, Page } from '@playwright/test'
class openaccpage {
  page:Page
  openacc:Locator
  customername:Locator
  currency:Locator
  processbtn:Locator

  constructor(page:Page){
    this.page=page
    this.openacc = page.getByRole('button', { name: 'Open Account' });
    this.customername=page.locator('#userSelect')
    this.currency=page.locator('#currency')
    this.processbtn=page.locator('button[type="submit"]')
  }
  async openaccbtn(){
    await this.openacc.click()
  }
  async customernamebtn(){
    await this.customername.selectOption("Akshita Jain")
  }
  async currencybtn(){
    await this.currency.selectOption("Rupee")
  }
  async Processbtn(){
    await this.processbtn.click()
  }
}
export default openaccpage