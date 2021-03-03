import { NavigationBar } from "./navigation.page";

const SELECTORS = {

    HOMEPAGE_HEADER : 'android=new UiSelector().text("WEBDRIVER")',

};

export const HomePage = {
    ...NavigationBar,
    isHomePageDisplayed(){
        return $(SELECTORS.HOMEPAGE_HEADER).waitForDisplayed();
    }
    
};