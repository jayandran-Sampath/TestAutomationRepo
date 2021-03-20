import { NavigationBar } from "./navigation.page";

const SELECTORS = {
    EMAIL_TXTBX : '~input-email',

    PASSWORD_TXTBX : '~input-password',

    LOGIN_BTN : '~button-LOGIN',

    LOGINPAGE_HEADER : 'android=new UiSelector().text("Login / Sign up Form")',

    SIGNUP_TAB: '~button-sign-up-container',

    REPEAT_PASSWORD_TXTBX : '~input-repeat-password',

    SIGNUP_BTN : '~button-SIGN UP',

    LOGIN_SUCCESS_MSG: 'android=new UiSelector().text("You are logged in!")',

    LOGIN_SUCCESS_OK_BTN: 'android=new UiSelector().text("OK")',

    SIGNUP_EMAIL_TXTBX: '~input-email',

    SIGNUP_EMAIL_TXTBX: '~input-password',

    SIGNUP_EMAIL_TXTBX: '~input-repeat-password',

    SIGNUP_SUCCESS_MSG: 'android=new UiSelector().text("You successfully signed up!")',

    SIGNUP_SUCCESS_OK_BTN: 'android=new UiSelector().text("OK")'
};

export const LoginPage = {
    ...NavigationBar,

    isLoginPageDisplayed(){
        return $(SELECTORS.LOGINPAGE_HEADER).waitForDisplayed();
    },

    performLogin(){
        $(SELECTORS.EMAIL_TXTBX).waitForDisplayed();
        $(SELECTORS.EMAIL_TXTBX).addValue('test@test.com');
        $(SELECTORS.PASSWORD_TXTBX).addValue('tester123');
        $(SELECTORS.LOGIN_BTN).click();
        return this;
    },

    isLoginSuccess(){
        return $(SELECTORS.LOGIN_SUCCESS_MSG).waitForDisplayed();
    },

    clickOKButton(){
        $(SELECTORS.LOGIN_SUCCESS_OK_BTN).click();
        return true;
    },

    clickSignUpTab(){
        $(SELECTORS.SIGNUP_TAB).waitForDisplayed();
        $(SELECTORS.SIGNUP_TAB).click();
        return this;
    },

    performSignUp(){
        $(SELECTORS.SIGNUP_EMAIL_TXTBX).waitForDisplayed();
        $(SELECTORS.SIGNUP_EMAIL_TXTBX).setValue('test@test.com');
        $(SELECTORS.PASSWORD_TXTBX).setValue('tester123');
        $(SELECTORS.REPEAT_PASSWORD_TXTBX).addValue('tester123');
        $(SELECTORS.SIGNUP_BTN).click();
        return this;
    },

    isSignUpSuccess(){
        return $(SELECTORS.SIGNUP_SUCCESS_MSG).waitForDisplayed();
    },

    clickOKOnSignUPSuccessPopup(){
        $(SELECTORS.SIGNUP_SUCCESS_OK_BTN).click();
        return true;
    }

};