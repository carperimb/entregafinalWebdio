//import $ from "webdriverio/build/commands/browser/$";

import BasePage from "./base.page";
class ProductPage extends BasePage {
    //Web elements
    get productTitle(){ return $('h1')};
    get quantityInput(){return $('//*[@id="quantity_wanted"]')};
    get sizeDropdown(){return $('#uniform-group_1')};
    get colorPickList(){return $('#color_to_pick_list')};
    get colorPickBlack(){return $('#color_11')};
    get addtocartButton(){ return $('button=Submit')};
    get addtowishlistButton(){return $('//*[@id="wishlist_button"]')};
    get addedMessage(){return $('[class="fancybox-error"]')};
    get closeMessage(){return $('//*[@id="product"]/div[2]/div/div/a')};

    async clickAddtocartButton(){
        await super.clickElement(await this.addtocartButton);
    }

    async addProductQuantity(qty){
        await super.completeFieldWithText(await this.quantityInput, qty);
    }

    async selectSize(index){
        await super.clickElement(await this.sizeDropdown);
        await this.sizeDropdown.selectByIndex(index);
    }

    async selectColor(){
        await super.clickElement(await this.colorPickBlack);
    }

    async clickCloseMessage(){
        await super.clickElement(await this.closeMessage);
    }

    async clickAddtowishlistButton(){
        await super.clickElement(await this.addtowishlistButton);
    }

    
}
export default new ProductPage();