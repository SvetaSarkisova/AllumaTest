import selects from '../selectors/header.selectors';
import selectors from '../selectors/login.selectors';

export default class BasePage {

    openPage() {
        browser.url('');
        $(selects.header).waitForDisplayed();
    }

    openForgotUserName(){
        browser.url('');
        $(selectors.linkForgotUserName).click();
    }

    openForgotPassword(){
        browser.url('');
        $(selectors.linkForgotPassword).click();
    }

}