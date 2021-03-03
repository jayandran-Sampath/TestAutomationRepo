import { NavigationBar } from "./navigation.page";


const SELECTORS = {

    FORMPAGE_HEADER : 'android=new UiSelector().text("Form components")',

};

export const FormPage = {
    ...NavigationBar,
    isFormPageDisplayed(){
        return $(SELECTORS.FORMPAGE_HEADER).waitForDisplayed();
    }
    
};