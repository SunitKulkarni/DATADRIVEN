import { expect } from '@playwright/test';
import global from '../config/global.json';
import { ElementsUtils } from '../utils/elementutils';

export
    class LoginPage {
    constructor(page) {
        this.page = page;
        this.username= page.locator('#loginusername');
        this.Password= page.locator('#loginpassword');
        this.login= page.getByRole('button', { name: 'Log in' })
    }
    async loginToApp(res) { //async loginToApp(res)

       // await this.UserId.fill(global.username);//await this.UserId.fill(res.username);
        await ElementsUtils.enterText(this.page,'#loginusername',res.username)
        //await this.Password.fill(global.password);//await this.Password.fill(res.password);
        await ElementsUtils.enterText(this.page,'#loginpassword',res.password)
        //await this.login.click();
        await ElementsUtils.clickElement(this.page,'button:has-text("Log In")');
       
    }
}