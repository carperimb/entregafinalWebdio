//import $ from "webdriverio/build/commands/element/$";
import BasePage from "./base.page";
class LayercartPage extends BasePage {
    //Web elements
    get layercartMessage(){return $('//*[@id="layer_cart"]/div[1]/div[1]/h2')};
    get checkoutButton(){return $('//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a')};

    async clickCheckoutButton(){
        await super.clickElement(await this.checkoutButton);
    }
}
export default new LayercartPage();