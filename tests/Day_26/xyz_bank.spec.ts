import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

import LoginPage from '../../testdata/POM/login.page';
import OpenAccPage from '../../testdata/POM/openacc.page';

import CustomerLoginPage from '../../testdata/POM/customerlogin.page';
import DepositPage from '../../testdata/POM/deposit.page';
import WithdrawPage from '../../testdata/POM/withdraw.page';
import BalancePage from '../../testdata/POM/balance.page';
import LogoutPage from '../../testdata/POM/logout.page';

const data = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../testdata/bank.json'), 'utf-8')
);

test('Complete Banking Flow (Manager + Customer)', async ({ page }) => {

  await page.goto(data.url);

  const login = new LoginPage(page);
  const openAcc = new OpenAccPage(page);

  const customerLogin = new CustomerLoginPage(page);
  const deposit = new DepositPage(page);
  const withdraw = new WithdrawPage(page);
  const balance = new BalancePage(page);
  const logout = new LogoutPage(page);

  page.on('dialog', async (dialog) => {
    console.log('ALERT:', dialog.message());
    await dialog.accept();
  });

  await login.bankmanager();
  await login.addcustomerbtn();
  await login.Firstname();
  await login.Lastname();
  await login.Postcode();
  await login.submit();

  await openAcc.openaccbtn();
  await openAcc.customernamebtn();
  await openAcc.currencybtn();
  await openAcc.Processbtn();

  await page.locator('.btn.home').click();

  await customerLogin.customerLoginPage();
  await customerLogin.yournamebtn();
  await customerLogin.clickLogin();

  // const before = await balance.getBalance();
 const initial = await balance.getBalance();

await deposit.Deposit();
await deposit.amountdepositbtn();
await deposit.Depositbtn();

const afterDeposit = await balance.getBalance();
expect(afterDeposit).toBe(initial + 1000);

await withdraw.Withdrawl();
await withdraw.amountwithdrawlbtn();
await withdraw.Withdrawlbtn();

const after = await balance.getBalance();
expect(after).toBe(afterDeposit - 500);

  // await balance.validateBalance(500);

  await logout.logoutbtn();

});