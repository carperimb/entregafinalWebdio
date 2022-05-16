const PAGE_TIMEOUT = 10000;

export default class BasePage {
  /**
   * Open page
   * @param {String} path to access a site
   */
  async open(path) {
    await browser.url(`${path}`);
  }


  /**
   * Wait until element is clickable and click
   * @param {Object} element to click
   */
  async clickElement(element) {
    await element.waitForClickable({ timeout: PAGE_TIMEOUT });
    await element.click();
  }

  /**
   * Complete field with text
   * @param {Object} element to be filled with text
   * @param {String} text to fill element
   */
  async completeFieldWithText(element, text) {
    await element.waitForClickable({ timeout: PAGE_TIMEOUT });
    await element.setValue(text);
  }
}
