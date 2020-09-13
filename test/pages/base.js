import selects from '../selectors/header.selectors';
import expectedResultHead from '../expectedResult/header.res';
import {assert} from 'chai';

export default class Base {

    openPage() {
        browser.url('');
        $(selects.header).waitForDisplayed();
    }

}