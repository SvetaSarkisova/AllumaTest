import {assert} from 'chai';
import expectedForgotUser from '../expectedResult/forgotUserName.res';
import BasePage from "./base.page";
import selectorsForgotUserName from "../selectors/forgotUserName.selectors";
import selectorsForgotPassword from "../selectors/forgotPassword.selectors";
import selectorsLoginForm from "../selectors/login.selectors";
import expectedForgotPassword from "../expectedResult/forgotPassword.res";
import expectedLoginForm from "../expectedResult/login.res";
import data from "../data.json";

class ForgotUserNamePage extends BasePage {

    openForgotUserNamePage() {
        this.openForgotUserName();
        const forgotUserName = $(selectorsForgotUserName.headerTitleConnect).isDisplayed();
        assert.isTrue(forgotUserName);
    }

    titleRecoverUsernameDisplayed() {
        const recoverUsername = $(selectorsForgotUserName.headerTitleRecoveryUserName).isDisplayed();
        assert.isTrue(recoverUsername);
    }

    emailFieldDisplayed() {
        const emailField = $(selectorsForgotUserName.emailInputField).isDisplayed();
        assert.isTrue(emailField);
    }

    emailLabelDisplayed() {
        const emailLabel = $(selectorsForgotUserName.emailLabel).isDisplayed();
        assert.isTrue(emailLabel);
    }

    emailFieldIconDisplayed() {
        const icon = $(selectorsForgotUserName.emailFieldIcon).isDisplayed();
        assert.isTrue(icon);
    }

    forgotPasswordLinkDisplayed() {
        const forgotPasswordLink = $(selectorsForgotUserName.forgotMyPassLink).isDisplayed();
        assert.isTrue(forgotPasswordLink);
    }

    backToLoginButtonDisplayed() {
        const backToLogin = $(selectorsForgotUserName.backToLoginBtn).isDisplayed();
        assert.isTrue(backToLogin);
    }

    recoverUserNameButtonDisplayed() {
        const recoverUserName = $(selectorsForgotUserName.recoverUserNameBtn).isDisplayed();
        assert.isTrue(recoverUserName);
    }

    headerTitleConnectionText() {
        const connectTxt = $(selectorsForgotUserName.headerTitleConnect).getText();
        assert.equal(connectTxt, expectedForgotUser.headerTitleConnection);
    }

    headerTitleRecoverUserNameText() {
        const recoverUsNameText = $(selectorsForgotUserName.headerTitleRecoveryUserName).getText();
        assert.equal(recoverUsNameText, expectedForgotUser.headerTitleRecoverUsername);
    }

    emailLabelText() {
        const labelTxt = $(selectorsForgotUserName.emailLabel).getText();
        assert.equal(labelTxt, expectedForgotUser.emailLabelText);
    }

    forgotPasswordLinkText() {
        const linkForgotText = $(selectorsForgotUserName.forgotMyPassLink).getText();
        assert.equal(linkForgotText, expectedForgotUser.forgotMyPassLinkText);
    }

    backToLoginBtnText() {
        const backToLogin = $(selectorsForgotUserName.backToLoginBtn).getText();
        assert.equal(backToLogin, expectedForgotUser.backToLoginBtnText);
    }

    recoverUserNameBtnText() {
        const recoverUserName = $(selectorsForgotUserName.recoverUserNameBtn).getText();
        assert.equal(recoverUserName, expectedForgotUser.recoverUsernameBtnText);
    }

    forgotPasswordLinkClickable(){
        const link = $(selectorsForgotUserName.forgotMyPassLink).isClickable();
        assert.isTrue(link);
    }

    backToLoginBtnClickable(){
        const backToLoginBtn = $(selectorsForgotUserName.backToLoginBtn).isClickable();
        assert.isTrue(backToLoginBtn);
    }

    recoverUserNameBtnClickable(){
        const recoverUserNameBtn = $(selectorsForgotUserName.recoverUserNameBtn).isClickable();
        assert.isTrue(recoverUserNameBtn);
    }

    forgotMyPasswordRedirects() {
        $(selectorsForgotUserName.forgotMyPassLink).click();
        const forgotPassword = $(selectorsForgotPassword.headerTitleForgotPassword).getText();
        assert.equal(forgotPassword, expectedForgotPassword.titleForgotPassword);
    }

    backToLoginBtnRedirects() {
        this.openForgotUserName();
        browser.pause(2000);
        $(selectorsForgotUserName.backToLoginBtn).click();
        const backToLog = $(selectorsLoginForm.headerTitleWelcome).getText();
        assert.equal(backToLog, expectedLoginForm.headerTitleWelcomeText);

    }

    emptyEmailError() {
        this.openForgotUserName();
        browser.pause(1000);
        $(selectorsForgotUserName.recoverUserNameBtn).click();
        const errorMsg = $(selectorsForgotUserName.errorMassage).isDisplayed();
        assert.isTrue(errorMsg);

    }

    correctEmailResult() {
        $(selectorsForgotUserName.emailInputField).setValue(data.emailCorrect);
        $(selectorsForgotUserName.recoverUserNameBtn).click();
        const result = $$(selectorsForgotUserName.successEmailSentSign)[1].isDisplayed();
        assert.isTrue(result);

    }

    correctEmailResultText() {
        const result = $$(selectorsForgotUserName.successEmailSentSign)[1].getText();
        assert.equal(result, expectedForgotUser.successEmailSentText);

    }
}

export default new ForgotUserNamePage();