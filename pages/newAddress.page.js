//import $ from "webdriverio/build/commands/element/$";

import BasePage from "./base.page";
class NewAddressPage extends BasePage {
    //Web elements
    get pageTitle(){ return $('h1')};
    get addressInput(){return $('#address1')};
    get cityInput(){return $('#city')};
    get stateDropdown(){return $('#id_state')};
    get postcodeInput(){ return $('#postcode')};
    get countryDropdown(){return $('#id_country')};
    get homephoneInput(){ return $('#phone')};
    get mobilephoneInput(){return $('#phone_mobile')};
    get aliasInput(){return $('#alias')};
    get saveButton(){return $('=Save')};
    get alertMessage(){return $('.alert alert-danger')};

    async completeNewaddressFields(address, city, state, postcode, country, homephone, mobilephone, alias){
        await super.completeFieldWithText(await this.addressInput, address);
        await super.completeFieldWithText(await this.cityInput, city);
        await super.completeFieldWithText(await this.stateDropdown, state);
        await super.completeFieldWithText(await this.postcodeInput, postcode);
        await super.completeFieldWithText(await this.countryDropdown, country);
        await super.completeFieldWithText(await this.homephoneInput, homephone);
        await super.completeFieldWithText(await this.mobilephoneInput, mobilephone);
        await super.completeFieldWithText(await this.aliasInput, alias);
        await super.clickElement(await this.saveButton);
    }
}
export default new NewAddressPage();