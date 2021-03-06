import {assert} from 'chai';
import BasePage from './base.page';
import selects from '../selectors/header.selectors';
import expectedRes from '../expectedResult/header.res';


class HeaderTitle extends BasePage {

    titlePageText() {
        const text = browser.getTitle();
        assert.equal(text, expectedRes.pageTitleText);
    }

    headerDisplayed() {
        const head = $(selects.header).isDisplayed();
        assert.isTrue(head);
    }
    headerText() {
        const text = $(selects.header).getText();
        assert.equal(text, expectedRes.headerText);
    }


   // BUGS:
    // englishLang() {
    //     const languageEn = $(selects.englishLang).isDisplayed();
    //     assert.isTrue(languageEn);
    //
    //  }
    //
    // spanishLang() {
    //     const languageEs = $(selects.spanishLang).isDisplayed();
    //     assert.isTrue(languageEs);
    //
    //  }
    //
    // englishLangText() {
    //     const languageEnText = $(selects.englishLang).getText();
    //     assert.equal(languageEnText, expectedRes.englishLang);
    //
    // }
    //
    // spanishLangText() {
    //     const languageEsText = $(selects.spanishLang).getText();
    //     assert.equal(languageEsText, expectedRes.spanishLang);
    //
    // }

}
export default new HeaderTitle();