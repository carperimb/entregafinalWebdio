import account, {
    signUpAccountSuccess,
    signUpAccountError,

} from "../data/account";
import HomePage from '../pages/home.page';
import AuthenticationPage from '../pages/authentication.page';
import SignupPage from '../pages/signup.page';
import { expect } from "chai";


describe('Sign up', () => {
    beforeEach(async function () {
        await AuthenticationPage.open('');
        await HomePage.clickSigninMenu();
    });

    it(`should ${signUpAccountSuccess.testSpecification} when register button is pressed`, async () => {
        await AuthenticationPage.completeEmailCreate(signUpAccountSuccess.email);
        await AuthenticationPage.clickCreateAccountButton();
        await SignupPage.completeSignupForm(signUpAccountSuccess);
        
        await SignupPage.clickRegisterButton();
        
        expect(await SignupPage.pageTitle.getText()).to.equal('MY ACCOUNT');
        

    });
    /* signUpAccountError.forEach((account) => {
        it(`should ${account.testSpecification} when register button is pressed`, async() => {
            await AuthenticationPage.completeEmailCreate(account.email);
            await AuthenticationPage.clickCreateAccountButton();
            await SignupPage.completeSignupForm(account);
            
            await SignupPage.clickRegisterButton();
            expect (await AuthenticationPage.alertMessage).to.exist;
        });
    }); */
})