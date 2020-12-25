import { NavigationBar } from "./navigation.page";

const SELECTORS = {

    HOMEPAGE_HEADER : 'android=new UiSelector().text("WEBDRIVER")',

};

export const HomePage = {
    ...NavigationBar,
    isHomePageDisplayed(){
        $(SELECTORS.HOMEPAGE_HEADER).waitForDisplayed();
        return $(SELECTORS.HOMEPAGE_HEADER).isDisplayed();
    }
    
};