//import $ from "webdriverio/build/commands/element/$";

import BasePage from "./base.page";
class AuthenticationPage extends BasePage {
    //Web elements
    get pageTitle(){ return $('h1')};
    //get signinMenu(){return $('[class="login"]')};
    get emailField() { return $('#email')};
    get passwField(){ return $('#passwd')};
    get signinButton(){return $('#SubmitLogin')};
    get alertMessage(){return $('[class="alert alert-danger"]')};
    get emailCreateInput() { return $('#email_create') };
    get createAccountButton() { return $('#SubmitCreate') };

    /**
   * Completes email and password fields
   * @param {String} email to fill email field
   * @param {String} password to fill password field
   */
  async completeAuthentication(email, password) {
    await super.completeFieldWithText(await this.emailField, email);
    await super.completeFieldWithText(await this.passwField, password);
  }
  async clickSigninButton() {
    await super.clickElement(await this.signinButton);
  }
  async completeEmailCreate(email){
    await super.completeFieldWithText(await this.emailCreateInput, email);
  }

  async clickCreateAccountButton(){
    await super.clickElement(await this.createAccountButton);
  }
  
}
export default new AuthenticationPage();