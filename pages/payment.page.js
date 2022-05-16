//import $ from "webdriverio/build/commands/browser/$";
import BasePage from "./base.page";
class PaymentPage extends BasePage {
    //Web elements
    get pageTitle(){ return $('//*[@id="center_column"]/h1')};
    get bankwireOption(){ return $('.bankwire')};
    get detailTitle(){return $('h3')};
    get confirmButton(){return $('[class="button btn btn-default button-medium"]')};
    get orderConfirmation(){return $('//*[@id="center_column"]/div/p/strong')};

    async clickBankwireOption(){
        await super.clickElement(await this.bankwireOption);
    }

    async clickOrderConfirmation(){
        await super.clickElement(await this.confirmButton);
    }
}
export default new PaymentPage();