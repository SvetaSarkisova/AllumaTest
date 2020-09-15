import {assert} from 'chai';
import BasePage from "./base.page";
import selectorsForgotPassword from "../selectors/forgotPassword.selectors";
import selectorsLoginPage from "../selectors/login.selectors";
import selectorsUserName from "../selectors/forgotUserName.selectors";
import expectedForgotPassword from '../expectedResult/forgotPassword.res';
import data from "../data.json";


class ForgotPasswordPage extends BasePage {

    openForgotPasswordPage() {
        this.openForgotPassword();
        const forgotPassword = $(selectorsForgotPassword.headerTitleConnect).isDisplayed();
        assert.isTrue(forgotPassword);
    }

    titleForgotPasswDisplayed() {
        const forgotPasswTitle = $(selectorsForgotPassword.headerTitleForgotPassword).isDisplayed();
        assert.isTrue(forgotPasswTitle);
    }

    supportiveTextDisplayed() {
        const supportiveText = $(selectorsForgotPassword.supportiveText).isDisplayed();
        assert.isTrue(supportiveText);
    }

    forgotMyUserNameLinkDisplayed() {
        const forgotUserNameLink = $(selectorsForgotPassword.forgotMyUserNameLink).isDisplayed();
        assert.isTrue(forgotUserNameLink);
    }

    userNameFieldDisplayed() {
        const userNameField = $(selectorsForgotPassword.userNameField).isDisplayed();
        assert.isTrue(userNameField);
    }

    userNameFieldIconDisplayed() {
        const icon = $(selectorsForgotPassword.userNameIcon).isDisplayed();
        assert.isTrue(icon);
    }

    userNameFieldLabelDisplayed() {
        const label = $(selectorsForgotPassword.userNameLabel).isDisplayed();
        assert.isTrue(label);
    }

    cancelButtonDisplayed() {
        const cancelButton = $(selectorsForgotPassword.cancelButton).isDisplayed();
        assert.isTrue(cancelButton);
    }

    continueButtonDisplayed() {
        const continueButton = $(selectorsForgotPassword.continueButton).isDisplayed();
        assert.isTrue(continueButton);
    }

    headerTitleConnectionText() {
        const connectTxt = $(selectorsForgotPassword.headerTitleConnect).getText();
        assert.equal(connectTxt, expectedForgotPassword.titleConnection);
    }

    headerTitleForgotPasswordText() {
        const forgotText = $(selectorsForgotPassword.headerTitleForgotPassword).getText();
        assert.equal(forgotText, expectedForgotPassword.titleForgotPassword);
    }

    supportiveTextTxt() {
        const supportText = $(selectorsForgotPassword.supportiveText).getText();
        assert.equal(supportText, expectedForgotPassword.supportiveTextTxt);
    }

    forgotMyUserNameLinkText() {
        const linkForgot = $(selectorsForgotPassword.forgotMyUserNameLink).getText();
        assert.equal(linkForgot, expectedForgotPassword.forgotMyUserNameLinkText);
    }

    userNameLabelText() {
        const labelTxt = $(selectorsForgotPassword.userNameLabel).getText();
        assert.equal(labelTxt, expectedForgotPassword.userNameLabelText)
    }

    cancelBtnText() {
        const cancelTxt = $(selectorsForgotPassword.cancelButton).getText();
        assert.equal(cancelTxt, expectedForgotPassword.cancelButtonText);
    }

    continueBtnText() {
        const contBtnTxt = $(selectorsForgotPassword.continueButton).getText();
        assert.equal(contBtnTxt, expectedForgotPassword.cancelButtonText);
    }

    forgotUserNameLinkClickable(){
        const link = $(selectorsForgotPassword.forgotMyUserNameLink).isClickable();
        assert.isTrue(link);
    }

    cancelBtnClickable(){
        const cancelBtn = $(selectorsForgotPassword.cancelButton).isClickable();
        assert.isTrue(cancelBtn);
    }

    continueBtnTClickable(){
        const continueBtnT = $(selectorsForgotPassword.continueButton).isClickable();
        assert.isTrue(continueBtnT);
    }

    cancelBtnRedirect(){
        $(selectorsForgotPassword.cancelButton).click();
        const redirect = $(selectorsLoginPage.headerTitleWelcome).isDisplayed();
        assert.isTrue(redirect);
    }

    forgotUserNameRedirect(){
        this.openForgotPassword();
        $(selectorsForgotPassword.forgotMyUserNameLink).click();
        const redirect = $(selectorsUserName.headerTitleRecoveryUserName).isDisplayed();
        assert.isTrue(redirect);
    }

    userNameEmptyErrorMsg(){
        this.openForgotPassword();
        browser.pause(1000);
        $$(selectorsForgotPassword.continueButton)[1].click();
        const errorMsg = $(selectorsForgotPassword.errorMassage).isDisplayed();
        assert.isTrue(errorMsg);

    }

    userNameEmptyErrorMsgText(){
        const userNameEmpty = $(selectorsForgotPassword.errorMassage).getText();
        assert.equal(userNameEmpty, expectedForgotPassword.errorMsgText);
    }

    continueButtonRedirects(){
        $(selectorsForgotPassword.userNameField).setValue(data.userName);
        $$(selectorsForgotPassword.continueButton)[1].click();
        const emailSent = $(selectorsForgotPassword.emailSentHeader).isDisplayed();
        assert.isTrue(emailSent);
    }

}

export default new ForgotPasswordPage();
