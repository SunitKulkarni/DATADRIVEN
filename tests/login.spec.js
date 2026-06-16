import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import { HomePage } from '../pages/homePage';
import { WelcomePage } from '../pages/welcomepage';
import { BrowserUtils } from '../utils/browserutils';
import global from '../config/global.json';
import { ElementsUtils } from '../utils/elementutils';


test('Login Valid Test ', async ({ page }) => {
await BrowserUtils.involeApp(page);

let homepage = new HomePage(page);
let loginpage = new LoginPage(page);
let welcomepage = new WelcomePage(page);

await homepage.verifyHomePage();// 
await homepage.navigateToLoginPage();
await loginpage.loginToApp({ username: global.username, password: global.password });


await welcomepage.verifyLoginSucess();
await welcomepage.logoutFromApp();
await homepage.verifyLogoutSucess();


});