import {assert} from 'chai';// use assert from chai to verify expected result with actual result
import headerTitle from '../pages/header' // import class and methods from base.page

describe('1.1 Elements are present', function () { //define sub-suite title by passing a string

    it('TC-1.1.1 Page Title is displayed', function () { //define test title by passing a string
        headerTitle.openPage(); //use class HomePage method openPage to open baseUrl
    })

    it('TC-1.1.2 Header Title  is displayed ', function () {
        headerTitle.titlePageText(); //get page title, use class HomePage -> method tittle;
    });


    //BUGS:
    // it('TC-1.1.3 English Language switcher is displayed  ', function () {
    //     headerTitle.englishLang(); //get page title, use class HomePage -> method tittle;
    // });
    //
    // it('TC-1.1.4 Spanish Language switcher is displayed  ', function () {
    //     headerTitle.spanishLang(); //get page title, use class HomePage -> method tittle;
    // });
});

describe('1.2 Elements Values ', function () { //define sub-suite title by passing a string

    it('TC-1.2.1 -  Header Title text equal to “CONNECTIONS”', function () {
        headerTitle.headerText();
    });

    // BUGS:
    // it('TC-1.2.2 -  English Language switcher text is equal to "English"', function () {
    //     headerTitle.englishLangText();
    // });
    //
    // it('TC-1.2.3 -  Spanish Language switcher text is equal to "Espanol"', function () {
    //     headerTitle.spanishLangText();
    // });
});