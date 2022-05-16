//import $ from "webdriverio/build/commands/browser/$";
import BasePage from "./base.page";

class SignupPage extends BasePage {
    //Web elements
    
    get pageTitle() { return $('h1') };
    get firstNameInput() { return $('#customer_firstname') };
    get lastNameInput() { return $('#customer_lastname') };
    get emailInput() { return $('#email') };
    get passwordInput() { return $('#passwd') };
    get firstNameConfirmation() { return $('#firstname') };
    get lastNameConfirmation() { return $('#lastname') };
    get addressInput() { return $('#address1') };
    get cityInput() { return $('#city') };
    get stateDropdown() { return $('#id_state') };
    get postalCodeInput() { return $('#postcode') };
    get countryDropdown() { return $('#id_country') };
    get mobilePhoneInput() { return $('#phone_mobile') };
    get aliasInput() { return $('#alias') };
    get registerButton() { return $('#submitAccount') };
    get errorMessage() { return $('[class="alert alert-danger"]') };

    async completeFirstName(firstName) {
        await super.completeFieldWithText(await this.firstNameInput, firstName);
    }

    async completeLastName(lastName){
        await super.completeFieldWithText(await this.lastNameInput, lastName);
    }

    async completeEmail(email){
        await super.completeFieldWithText(await this.emailInput, email);
    }

    async completePassword(password){
        await super.completeFieldWithText(await this.passwordInput, password);
    }

    async completeAddress(address){
        await super.completeFieldWithText(await this.addressInput, address);
    }

    async completeCity(city){
        await super.completeFieldWithText(await this.cityInput, city);
    }

    async selectState(value, stateOption){
        
        await this.stateDropdown.selectByAttribute(value, stateOption);
    }

    async completePostalCode(postalCode){
        await super.completeFieldWithText(await this.postalCodeInput, postalCode);
    }

    async selectCountry(countryIndex){
        
        await this.countryDropdown.selectByIndex(countryIndex);
    }

    async completeMobilePhone(mobilePhone){
        await super.completeFieldWithText(await this.mobilePhoneInput, mobilePhone);
    }

    async completeAlias(alias){
        await super.completeFieldWithText(await this.aliasInput, alias);
    }

    async clickRegisterButton(){
        await super.clickElement(await this.registerButton);
    }

    async completeSignupForm(account){
        await this.completeFirstName(account.firstName);
        await this.completeLastName(account.lastName);
        await this.completeEmail(account.email);
        await this.completePassword(account.password);
        await this.completeAddress(account.address);
        await this.completeCity(account.city);
        await this.selectState(account.value, account.stateOption);
        await this.completePostalCode(account.postalCode);
        await this.selectCountry(account.countryIndex);
        await this.completeMobilePhone(account.mobilePhone);
        await this.completeAlias(account.alias);
        
    }


}
export default new SignupPage();