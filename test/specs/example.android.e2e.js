import { NavigationBar } from './../pageobjects/navigation.page'

describe('User able to', () => {
    it('navigate between pages', () => {
        expect(NavigationBar.navigateToLoginPage().isLoginPageDisplayed()).to.be.true;
        expect(NavigationBar.navigateToFormsPage().isFormPageDisplayed()).to.be.true;
        expect(NavigationBar.navigateToHomePage().isHomePageDisplayed()).to.be.true;
    });

    it('login', () => {
        expect(NavigationBar.navigateToLoginPage().performLogin()).to.be.true;
    });
});


