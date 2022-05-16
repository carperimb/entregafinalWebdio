//import $ from "webdriverio/build/commands/element/$";

import BasePage from "./base.page";
class CartPage extends BasePage{
    //Web elements
    get cartTitle(){ return $('.page-heading')};
    get checkoutButton(){return $('[class="button btn btn-default standard-checkout button-medium"]')};
    get authenticationStep(){return $('//*[@id="order_step"]')};

    async clickCheckoutButton(){
        await super.clickElement(await this.checkoutButton);
    }
}
export default new CartPage();