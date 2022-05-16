import HomePage from '../pages/home.page';
import AuthenticationPage from '../pages/authentication.page';
import { validAccount } from "../data/account";
import { expect } from 'chai';

describe('Sign out', () => {
    beforeEach(async function () {
        await HomePage.open('');
        await HomePage.clickSigninMenu();
        await AuthenticationPage.completeAuthentication(
          validAccount.email,
          validAccount.password
        );
        await AuthenticationPage.clickSigninButton();
      });
    it('Should sign out the application when clicking the sign out button', async() => {
        await HomePage.clickSignoutButton();
        expect (await HomePage.pageTitle.getText()).to.equal('AUTHENTICATION');
    });
    it('Should redirect to authentication page when successfully signing out and clicking the browser back button', async () => {
        await HomePage.clickSignoutButton();
        await browser.back();
        expect (await HomePage.pageTitle.getText()).to.equal('AUTHENTICATION');
    });
    it('Should show the sign out option in the top bar menu when successfully signing in the application', async () => {
        expect (await HomePage.signoutButton).to.exist;
    });
});