import NavigationBar from "./navigation.page";

const SELECTORS = {

    FORMPAGE_HEADER : 'android=new UiSelector().text("Form components")',

};

export const FormPage = {
    ...NavigationBar,
    isFormPageDisplayed(){
        $(SELECTORS.FORMPAGE_HEADER).waitForDisplayed();
        return $(SELECTORS.FORMPAGE_HEADER).isDisplayed();
    }
    
};