//import $ from "webdriverio/build/commands/browser/$";


import BasePage from "./base.page";

class HomePage extends BasePage {
  //Web Elements
  get searchField() { return $('#search_query_top') };
  get searchButton() { return $('[name="submit_search"]') };
  get signoutButton() { return $('[class="logout"]') };
  get pageTitle() { return $('h1') };
  get signinMenu() { return $('[class="login"]') };

  async searchProduct(product) {
    await super.completeFieldWithText(await this.searchField, product);
    await super.clickElement(await this.searchButton);
  }
  async clickSignoutButton() {
    await super.clickElement(await this.signoutButton);
  }

  async clickSigninMenu() {
    await super.clickElement(await this.signinMenu);
  }

}

export default new HomePage();