//import $ from "webdriverio/build/commands/browser/$";
import BasePage from "./base.page";
class ShippingPage extends BasePage {
    //Web elements
    get pageTitle(){ return $('h1')};
    get tosCheckbox(){ return $('#uniform-cgv')};
    get errorMessage(){ return $('.fancybox-error')};
    get closemessageButton(){return $('=Close')};
    get checkoutButton(){return $('[class="button btn btn-default standard-checkout button-medium"]')};

    async clickTosCheckbox(){
        await super.clickElement(await this.tosCheckbox);
    }

    async clickCheckoutButton(){
        await super.clickElement(await this.checkoutButton);
    }

    async clickClosemessageButton(){
        await super.clickElement(await this.closemessageButton);
    }
}
export default new ShippingPage();