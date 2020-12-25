import { NavigationBar } from "./navigation.page";

const SELECTORS = {
    EMAIL_TXTBX : '~input-email',

    PASSWORD_TXTBX : '~input-password',

    LOGIN_BTN : '~button-LOGIN',

    LOGINPAGE_HEADER : 'android=new UiSelector().text("Login / Sign up Form")',

    SIGNUP_TAB: '~button-sign-up-container',

    REPEAT_PASSWORD_TXTBX : '~input-repeat-password',

    SIGNUP_BTN : '~button-SIGN UP'


};

export const LoginPage = {
    ...NavigationBar,

    isLoginPageDisplayed(){
        $(SELECTORS.LOGINPAGE_HEADER).waitForDisplayed();
        return $(SELECTORS.LOGINPAGE_HEADER).isDisplayed();
    },

    performLogin(){
        $(SELECTORS.EMAIL_TXTBX).waitForDisplayed();
        $(SELECTORS.EMAIL_TXTBX).setValue('test@test.com');
        $(SELECTORS.PASSWORD_TXTBX).waitForDisplayed();
        $(SELECTORS.PASSWORD_TXTBX).setValue('tester');
        if($(SELECTORS.LOGIN_BTN).isDisplayed() && $(SELECTORS.LOGIN_BTN).isEnabled()){
            $(SELECTORS.LOGIN_BTN).click();
        }
        return true;
    }
    
};