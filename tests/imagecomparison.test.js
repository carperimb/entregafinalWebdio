
import HomePage from '../pages/home.page';
import SearchPage from '../pages/search.page';
import LayercartPage from '../pages/layercart.page';
import CartPage from '../pages/cart.page';
import { expect } from "chai";

describe('Image comparison', () => {
    it('Should compare the authentication page when proceed to checkout without registration', async() => {
        await HomePage.open('');
        await HomePage.searchProduct('blouse');
        await SearchPage.clickAddtocartButton();
        await LayercartPage.clickCheckoutButton();
        await CartPage.clickCheckoutButton();
        await browser.saveElement(await CartPage.authenticationStep, 'stepBar', {});
        expect(await browser.checkElement(await CartPage.authenticationStep, 'stepBar', {})).equal(0);    

    });
    
});