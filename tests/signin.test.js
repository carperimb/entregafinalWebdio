import { expect } from "chai";
import account, { validAccount, invalidAccount } from "../data/account";
import HomePage from '../pages/home.page';
import AuthenticationPage from '../pages/authentication.page';

describe ('Sign in', () => {
    beforeEach(async function () {
        await HomePage.open('');
        await HomePage.clickSigninMenu();
    });
    
    it('Should signing in the application when clicking the sign in button', async() => {
              
        await AuthenticationPage.completeAuthentication(
          validAccount.email,
          validAccount.password
        );
        await AuthenticationPage.clickSigninButton();
        expect(await HomePage.signoutButton).to.exist();
        expect(await AuthenticationPage.pageTitle.getText()).to.equal('MY ACCOUNT');
        await HomePage.clickSignoutButton();
    });
    invalidAccount.forEach((account) => {
      it(`Should ${account.testSpecification} when clicking  the sign in button`, async() => {
        await AuthenticationPage.completeAuthentication(
          account.email,
          account.password
        );
        await AuthenticationPage.clickSigninButton();
        expect (await AuthenticationPage.alertMessage).to.exist;
      });
    });
    
});