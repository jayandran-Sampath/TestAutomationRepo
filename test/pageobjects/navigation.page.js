const { FormPage } = require("./form.page");
const { HomePage } = require("./home.page");
const { LoginPage } = require("./login.page");

const SELECTORS = {
    NAVIGATIONBAR_LOGIN_BTN : '~Login',

    NAVIGATIONBAR_HOME_BTN : '~Home',

    NAVIGATIONBAR_FORMS_BTN : '~Forms'

};

export const NavigationBar = {
    navigateToLoginPage(){
        $(SELECTORS.NAVIGATIONBAR_LOGIN_BTN).waitForDisplayed();
        $(SELECTORS.NAVIGATIONBAR_LOGIN_BTN).click();
        return LoginPage;
    },

    navigateToHomePage(){
        $(SELECTORS.NAVIGATIONBAR_HOME_BTN).waitForDisplayed();
        $(SELECTORS.NAVIGATIONBAR_HOME_BTN).click();
        return HomePage;
    },

    navigateToFormsPage(){
        $(SELECTORS.NAVIGATIONBAR_FORMS_BTN).waitForDisplayed();
        $(SELECTORS.NAVIGATIONBAR_FORMS_BTN).click();
        return FormPage;
    }
};
