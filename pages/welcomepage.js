import { expect } from '@playwright/test';

export class WelcomePage {
    constructor(page) {
        this.page = page;
    }
    async verifyLoginSucess() {
 
          await expect(this.page.getByRole('link', { name: 'Welcome pavanol' })).toBeVisible();
    }
     async verifyUnSucessLogin() {
  
          await expect(this.page.getByRole('link', { name: 'Welcome pavanol' })).not.toBeVisible();
    }
    async logoutFromApp() {
        await this.page.getByRole('link', { name: 'Log out' }).click();
    }
}