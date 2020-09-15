import {assert} from 'chai';
import BasePage from "./base.page";
import selects from '../selectors/login.selectors';
import selectorsUN from '../selectors/forgotUserName.selectors';
import selectorsP from '../selectors/forgotPassword.selectors';
import expected from '../expectedResult/login.res';
import data from '../data.json';

class LoginForm extends BasePage {

    loginFormDisplayed() {
        this.openPage();
        const loginForm = $(selects.LoginForm).isDisplayed();
        assert.isTrue(loginForm);
    }

    titleConnectionDisplayed() {
        const titleConnect = $(selects.headerTitleCONNECTIONS).isDisplayed();
        assert.isTrue(titleConnect);
    }

    titleWelcomeToConnectDisplayed() {
        const welcome = $(selects.headerTitleWelcome).isDisplayed();
        assert.isTrue(welcome);
    }

    definitionTextDisplayed() {
        const definition = $(selects.definitionText).isDisplayed();
        assert.isTrue(definition);
    }

    qualifyQuestionDisplayed() {
        const qualify = $(selects.qualifyQuestion).isDisplayed();
        assert.isTrue(qualify);
    }

    screenerLinkDisplayed() {
        const screener = $(selects.screenerLink).isDisplayed();
        assert.isTrue(screener);
    }

    userNameFieldDisplayed() {
        const userNameField = $(selects.userNameField).isDisplayed();
        assert.isTrue(userNameField);
    }

    userNameLabelDisplayed() {
        const userNameLabel = $(selects.userNameLabel).isDisplayed();
        assert.isTrue(userNameLabel);
    }

    userNameIconDisplayed() {
        const userNameIcon = $(selects.userNameIcon).isDisplayed();
        assert.isTrue(userNameIcon);
    }

    passwordFieldDisplayed() {
        const passwordField = $(selects.passwordField).isDisplayed();
        assert.isTrue(passwordField);
    }

    passwordLabelDisplayed() {
        const passwordLabel = $(selects.passwordLabel).isDisplayed();
        assert.isTrue(passwordLabel);
    }

    passwordIconDisplayed() {
        const passwordIcon = $(selects.passwordIcon).isDisplayed();
        assert.isTrue(passwordIcon);
    }

    forgotUserNameDisplayed() {
        const forgotUserName = $(selects.linkForgotUserName).isDisplayed();
        assert.isTrue(forgotUserName);
    }

    forgotPasswordDisplayed() {
        const forgotPassword = $(selects.linkForgotPassword).isDisplayed();
        assert.isTrue(forgotPassword);
    }

    loginButtonDisplayed() {
        const loginButton = $(selects.loginButton).isDisplayed();
        assert.isTrue(loginButton);
    }

    helpfulTextDisplayed() {
        const helpfulTxt = $(selects.helpfulText).isDisplayed();
        assert.isTrue(helpfulTxt);
    }

    learnMoreTextDisplayed() {
        const learnMore = $(selects.learnMoreText).isDisplayed();
        assert.isTrue(learnMore);
    }

    headerTitleConnectionsTxt() {
        const connectTxt = $(selects.headerTitleCONNECTIONS).getText();
        assert.equal(connectTxt, expected.headerTitleConnectionsText);
    }

    headerTitleWelcomeTxt() {
        const welcomeTxt = $(selects.headerTitleWelcome).getText();
        assert.equal(welcomeTxt, expected.headerTitleWelcomeText);
    }

    definitionTextTxt() {
        const definitionTxt = $(selects.definitionText).getText();
        assert.equal(definitionTxt, expected.definitionText);
    }


    qualifyQuestionTxt() {
        const qualifyTxt = $$(selects.qualifyQuestion)[1].getText();
        assert.equal(qualifyTxt, expected.qualifyQuestionText);
    }

    screenerLinkTxt() {
        const screenerTxt = $(selects.screenerLink).getText();
        assert.equal(screenerTxt, expected.screenerText);
    }

    userNameLabelTxt() {
        const userNameLabel = $(selects.userNameLabel).getText();
        assert.equal(userNameLabel, expected.userNameLblText);
    }

    passwordLabelTxt() {
        const passwordLabel = $$(selects.passwordLabel)[1].getText();
        assert.equal(passwordLabel, expected.passwordLblText);
    }

    forgotUserNameLinkTxt() {
        const forgotUserNameLink = $(selects.linkForgotUserName).getText();
        assert.equal(forgotUserNameLink, expected.forgotUserNameText);
    }


    forgotPasswordLinkTxt() {
        const forgotPasswordLink = $(selects.linkForgotPassword).getText();
        assert.equal(forgotPasswordLink, expected.forgotPasswordText);
    }

    loginButtonTxt() {
        const loginButton = $(selects.loginButton).getText();
        assert.equal(loginButton, expected.loginButtonText);
    }

    helpfulTextTxt() {
        const helpfulText = $(selects.helpfulText).getText();
        assert.equal(helpfulText, expected.helpfulTextTxt);
    }

    learnMoreTextTxt() {
        const learnMore = $$(selects.learnMoreText)[1].getText();
        assert.equal(learnMore, expected.learnMoreTextTxt);
    }

    screenerLinkClickable() {
        const screenerLink = $(selects.screenerLink).isClickable();
        assert.equal(screenerLink, true);
    }

    forgotUserNameLinkClickable() {
        const forgotUserNameLink = $(selects.linkForgotUserName).isClickable();
        assert.equal(forgotUserNameLink, true);
    }

    forgotPasswordLinkClickable() {
        const forgotPasswordLink = $(selects.linkForgotPassword).isClickable();
        assert.equal(forgotPasswordLink, true);
    }

    loginButtonClickable() {
        const loginButton = $(selects.loginButton).isClickable();
        assert.equal(loginButton, true);
    }

    //Bug:
    // learnMoreLinkClickable() {
    //     const learnMore = $(selects.learnMoreText).isClickable();
    //     assert.equal(learnMore, true)
    // }

    screenerLinkRedirect() {
        $(selects.screenerLink).click();
        const screenerLink = browser.getUrl();
        assert.equal(screenerLink, expected.linkQuickScreener);
    }

    forgotUserNameLinkRedirect() {
        this.openPage();
        $(selects.linkForgotUserName).click();
        const recoveryUserName = $(selectorsUN.headerTitleConnect).isDisplayed();
        assert.isTrue(recoveryUserName);
    }

    forgotPasswordLinkRedirect() {
        this.openForgotPassword();
        const recoveryPassword = $(selectorsP.headerTitleConnect).isDisplayed();
        assert.isTrue(recoveryPassword);
    }

    whenUserNameAndPasswordEmpty() {
        this.openPage();
        $(selects.loginButton).click();
        const errorMsg = $(selects.errorMassageAllEmpty).isDisplayed();
        assert.isTrue(errorMsg);
    }

    errorAllFieldsEmptyTxt(){
        $(selects.loginButton).click();
        const allEmpty = $(selects.errorMassageAllEmpty).getText();
        assert.equal(allEmpty, expected.errorAllFieldsEmpty);
    }


    whenUserNameEmpty() {
        $(selects.userNameField).clearValue();
        $(selects.passwordField).setValue(data.password);
        $(selects.loginButton).click();
        const errorMsg = $(selects.errorMassageUserNameEmpty).isDisplayed();
        assert.equal(errorMsg, true);
    }

    errorMsgUserNameEmptyTxt(){
        $(selects.passwordField).setValue(data.password);
        $(selects.loginButton).click();
        const userNameEmpty = $(selects.errorMassageUserNameEmpty).getText();
        assert.equal(userNameEmpty, expected.errorUserNameFieldEmpty);
    }

    whenPasswordEmpty() {
         $(selects.userNameField).setValue(data.userName);
         $(selects.loginButton).click();
        const errorMsg = $(selects.errorMassagePasswordFEmpty).isDisplayed();
        assert.equal(errorMsg, true);
    }

    errorMsgPasswordEmptyTxt(){
        $(selects.userNameField).setValue(data.userName);
        $(selects.loginButton).click();
        const passwordEmpty = $(selects.errorMassagePasswordFEmpty).getText();
        assert.equal(passwordEmpty, expected.errorPasswordFieldEmpty);
    }

    whenUserNameAndPasswordIncorrect() {
        $(selects.userNameField).setValue(data.userName);
        $(selects.passwordField).setValue(data.password);
        $(selects.loginButton).click();
        const errorMsg = $(selects.errorMessageAllIncorrect).isDisplayed();
        assert.equal(errorMsg, true);
    }

    errorAllFieldsIncorrectTxt(){
        $(selects.userNameField).setValue(data.userName);
        $(selects.passwordField).setValue(data.password);
        $(selects.loginButton).click();
        const allIncorrect = $(selects.errorMessageAllIncorrect).getText();
        assert.equal(allIncorrect, expected.errorAllFieldIncorrect);
    }

}

export default new LoginForm();

