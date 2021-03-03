import { expect } from 'chai';
import { LoginPage } from '../pageobjects/login.page';
import { NavigationBar } from './../pageobjects/navigation.page'

describe('User able to', () => {
    it('navigate between pages', () => {
        expect(NavigationBar.navigateToLoginPage().isLoginPageDisplayed()).to.be.true;
        expect(NavigationBar.navigateToFormsPage().isFormPageDisplayed()).to.be.true;
        expect(NavigationBar.navigateToHomePage().isHomePageDisplayed()).to.be.true;
    });

    it('login', () => {
        NavigationBar.navigateToLoginPage().performLogin();
        expect(LoginPage.isLoginSuccess()).to.be.true;
        expect(LoginPage.clickOKButton()).to.be.true;
    });

    it('Signup', () => {
        NavigationBar.navigateToLoginPage().clickSignUpTab().performSignUp();
        expect(LoginPage.isSignUpSuccess()).to.be.true;
        expect(LoginPage.clickOKOnSignUPSuccessPopup()).to.be.true;
    });
});


