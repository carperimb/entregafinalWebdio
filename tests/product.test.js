import HomePage from '../pages/home.page';
import AuthenticationPage from '../pages/authentication.page';
import SearchPage from '../pages/search.page';
import ProductPage from '../pages/product.page';
import { validAccount } from "../data/account";
import { expect } from 'chai';

describe('Product', () => {
  before(async function () {
    await HomePage.open('');
    await HomePage.clickSigninMenu();
    await AuthenticationPage.completeAuthentication(
      validAccount.email,
      validAccount.password
    );
    await AuthenticationPage.clickSigninButton();
  });
  it('Should search for "blouse" and show the result page when clicking the search button', async () => {
    await HomePage.searchProduct('blouse');
    expect(await SearchPage.pageTitle.getText()).to.contain('SEARCH');

  });
  it('Should show a confirmation message when adding a product to the wish list', async () => {
    await HomePage.searchProduct('shirt');
    await SearchPage.clickImgProd();

    await ProductPage.clickAddtowishlistButton();
    expect(await ProductPage.addedMessage).to.exist;
    
  });
  it('Should let change the quantity when entering the product page', async () => {
    await HomePage.searchProduct('skirt');
    await SearchPage.clickImgProd();
    await ProductPage.addProductQuantity('2');
    expect(await ProductPage.quantityInput.getText()).to.equal('2', 'Do not show the expected value');
  });
  it('Should let select size from menu when entering the product page', async () => {
    await HomePage.searchProduct('dress');
    await SearchPage.clickImgProd();
    await ProductPage.selectSize(2);
    expect (await ProductPage.sizeDropdown.getText()).to.contain('M');
  });
  it('Should let select a color when entering the product page', async() => {
    await HomePage.searchProduct('dress');
    await SearchPage.clickImgProd();
    await ProductPage.selectColor();
    expect (await ProductPage.colorPickBlack).to.exist;
  });
});