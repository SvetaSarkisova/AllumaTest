import selects from '../selectors/header.selectors';
import selectors from '../selectors/login.selectors';
import {assert} from 'chai';

export default class Base {

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