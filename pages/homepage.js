import { expect } from '@playwright/test';
export

    class HomePage {
    constructor(page) {
        this.page = page;
    }
    async verifyHomePage() {
        await expect(this.page.getByRole('link', { name: 'Log in' })).toBeVisible();
    }
    async navigateToLoginPage() {
        await this.page.getByRole('link', { name: 'Log in' }).click();
    }
    async verifyLogoutSucess() {
        await expect(this.page.getByRole('link', { name: 'Log in' })).toBeVisible();;
    }
}