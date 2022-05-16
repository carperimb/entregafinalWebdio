//import $ from "webdriverio/build/commands/element/$";

import BasePage from "./base.page";
class AddressesPage extends BasePage{
    //Web elements
    get pageTitle(){ return $('h1')};
    get addressCheckbox (){ return $('#addressesAreEquals')};
    get addnewaddressButton(){ return $('=Add a new address')};
    get addressDropdown(){ return $('#id_address_delivery')};
    get checkoutButton(){return $('[class="button btn btn-default button-medium"]')};

    async clickAddnewaddressButton(){
        await super.clickElement(await this.addnewaddressButton);
    }

    async clickCheckoutButton(){
        await super.clickElement(await this.checkoutButton);
    }
}
export default new AddressesPage();