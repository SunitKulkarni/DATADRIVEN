export
class ElementsUtils {
    // buttons, radio, checkbox, links,images,logo
static async clickElement (page,selector){
    await page.waitForSelector(selector);
    await page.locator(selector).click();
}
// edit box, combo
static async enterText (page,selector,text){
    await page.waitForSelector(selector);
    await page.locator(selector).fill(text);
}
// capture text from component
static async getText (page,selector){
    await page.waitForSelector(selector);
    return await page.locator(selector).textContent();
}
// remove text
static async clearText (page,selector){
    await page.waitForSelector(selector);
    await page.locator(selector).fill('');
}
// get attribute value
static async getAttribute (page,selector,attribute){
    await page.waitForSelector(selector);
    return await page.locator(selector).getAttribute(attribute);
}
// selection from dropdown
static async selectDropDown (page,selector,value){
    await page.waitForSelector(selector);
    await page.locator(selector).selectOption(value);
}
 // Press Enter key on an element
  static async pressEnter(page, selector) {
    await page.waitForSelector(selector);
    await page.locator(selector).press('Enter');
  }
 // Type text AND press Enter (common pattern)
  static async enterTextAndSubmit(page, selector, text) {
    await page.waitForSelector(selector);
    await page.locator(selector).fill(text);
    await page.locator(selector).press('Enter');
  }

}