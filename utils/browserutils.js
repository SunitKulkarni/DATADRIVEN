import global from '../config/global.json';

export class BrowserUtils {
    static async involeApp(page) {
        await page.goto(global.url);
    }
}