//import $ from "webdriverio/build/commands/browser/$";


import BasePage from "./base.page";

class SearchPage extends BasePage {
    //Web elements
    get moreButton(){ return $('//*[@id="center_column"]/ul/li/div/div[2]/div[2]/a[2]/span')};
    get imgTitle(){return $('//*[@id="center_column"]/ul/li/div/div[1]/div/a[1]/img')};
    get pageTitle(){ return $('h1')};
    get addtocartButton(){return $('[title="Add to cart"]')};

    async clickMoreButton(){
        await super.clickElement(await this.moreButton);
    }
    async clickImgProd(){
        await super.clickElement(await this.imgTitle);
    }
    async clickAddtocartButton(){
        await super.clickElement(await this.addtocartButton);
    }

}
export default new SearchPage();