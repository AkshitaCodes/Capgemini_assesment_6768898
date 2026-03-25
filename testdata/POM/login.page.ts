import { expect, Locator, Page } from '@playwright/test'
class LoginPage{
  page:Page
  bankmanagerlogin:Locator
  addcustomer:Locator
  firstname:Locator
  lastname:Locator
  postcode:Locator
  btnSubmit:Locator



    constructor(page:Page){
    this.page=page
    this.bankmanagerlogin=page.getByRole('button', { name: 'Bank Manager Login' })
    this.addcustomer = page.getByRole('button', { name: 'Add Customer' });
    this.firstname=page.getByPlaceholder('First Name')
    this.lastname=page.getByPlaceholder('Last Name')  
    this.postcode=page.getByPlaceholder('Post Code')
    this.btnSubmit=page.locator('.btn.btn-default')
  }

  async bankmanager(){
    await this.bankmanagerlogin.click()
  }
  async addcustomerbtn(){
    await this.addcustomer.click()
  }
  async Firstname(){
    await this.firstname.fill("Akshita")
  }
  async Lastname(){
    await this.lastname.fill("Jain")
  }
  async Postcode(){
    await this.postcode.fill("123456")
  }
  async submit(){
    await this.btnSubmit.click()
  }
}
export default LoginPage