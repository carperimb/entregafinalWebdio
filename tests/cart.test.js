import HomePage from '../pages/home.page';
import AuthenticationPage from '../pages/authentication.page';
import SearchPage from '../pages/search.page';
import ProductPage from '../pages/product.page';
import LayercartPage from '../pages/layercart.page';
import CartPage from '../pages/cart.page';
import AddressesPage from '../pages/addresses.page';
import ShippingPage from '../pages/shipping.page';
import PaymentPage from '../pages/payment.page';
import { validAccount } from "../data/account";
import { expect } from 'chai';

describe('Cart', () => {
    before(async function () {
        await HomePage.open('');
        await HomePage.clickSigninMenu();
        await AuthenticationPage.completeAuthentication(
          validAccount.email,
          validAccount.password
        );
        await AuthenticationPage.clickSigninButton();
      });
    it('Should complete the full order process', async() => {
        await HomePage.searchProduct('blouse');
        await SearchPage.clickAddtocartButton();
        
        
        await LayercartPage.clickCheckoutButton();
        expect (await CartPage.cartTitle.getText()).to.equal('SHOPPING-CART SUMMARY\nYour shopping cart contains: 1 Product');
        await CartPage.clickCheckoutButton();
        expect (await AddressesPage.pageTitle.getText()).to.equal('ADDRESSES');
        await AddressesPage.clickCheckoutButton();
        expect (await ShippingPage.pageTitle.getText()).to.equal('SHIPPING');
        await ShippingPage.clickTosCheckbox();
        await ShippingPage.clickCheckoutButton();
        expect (await PaymentPage.pageTitle.getText()).to.equal('PLEASE CHOOSE YOUR PAYMENT METHOD');
        await PaymentPage.clickBankwireOption();
        expect (await PaymentPage.pageTitle.getText()).to.equal('ORDER SUMMARY');
        await PaymentPage.clickOrderConfirmation();
        expect (await PaymentPage.orderConfirmation.getText()).to.equal('Your order on My Store is complete.');


    });
})