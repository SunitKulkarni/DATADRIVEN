import { test, expect } from '@playwright/test';
import global from "../config/global.json";


test('REad Data From JSON File ', async ({ page }) => {
console.log (global.url);
console.log (global.username);
console.log (global.password);

});