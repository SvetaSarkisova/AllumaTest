import forgotPasswordForm from '../pages/forgotPassword.page'


describe('Forgot Password', function () {

    describe('Verify that all Elements are displayed', function () {

        it('TC 5.1.1 Header Title "CONNECTION" is displayed', function () {
            forgotPasswordForm.openForgotPasswordPage();
        });

        it('TC 5.1.2 Header Title "Forgot Password?" is displayed', function () {
            forgotPasswordForm.titleForgotPasswDisplayed();
        });

        it('TC 5.1.3 Supportive text is displayed ', function () {
            forgotPasswordForm.supportiveTextDisplayed();
        });

        it('TC 5.1.4 I Forgot my User Name link is displayed', function () {
            forgotPasswordForm.forgotMyUserNameLinkDisplayed();
        });

        it('TC 5.1.5 User Name Field is displayed', function () {
            forgotPasswordForm.userNameFieldDisplayed();
        });

        it('TC 5.1.6 User Name Field Icon is displayed', function () {
            forgotPasswordForm.userNameFieldIconDisplayed();
        });

        it('TC 5.1.7 User name Field Label is Displayed', function () {
            forgotPasswordForm.userNameFieldLabelDisplayed();
        });

        it('TC 5.1.8 Cancel Button is displayed', function () {
            forgotPasswordForm.cancelButtonDisplayed();
        });

        it('TC 5.1.9 Continue Button is displayed ', function () {
            forgotPasswordForm.continueButtonDisplayed();
        });

    });
    describe('Verify that all Elements have correct value ', function () {

        it('TC 5.2.1  Header Title text is equal to "CONNECTION"', function () {
            forgotPasswordForm.headerTitleConnectionText();
        });

        it('TC 5.2.2  Header Title text is equal to "Forgot Password?"', function () {
            forgotPasswordForm.headerTitleForgotPasswordText();
        });

        it('TC 5.2.3 Supportive text is equal to "Tell us your user name so that we can send you a link to reset your password."', function () { //define test title by passing a string
            forgotPasswordForm.supportiveTextTxt();
        });

        it('TC 5.2.4 I Forgot my User name link text is equal to "I forgot my User Name"', function () {
            forgotPasswordForm.forgotMyUserNameLinkText();
        });

        it('TC 5.2.5 User Name Label text is equal to "User name required"', function () {
            forgotPasswordForm.userNameLabelText();
        });

        it('TC 5.2.6 Cancel Button text is equal to "Cancel"', function () {
            forgotPasswordForm.cancelBtnText();
        });

        it('TC 5.2.7 Continue Button text is equal to "Continue"', function () {
            forgotPasswordForm.continueBtnText();
        });

    });

    describe('Verify that elements are  clickable', function () {

        it('TC 5.3.1 I Forgot My User name link is clickable', function () {
            forgotPasswordForm.forgotUserNameLinkClickable();
        });

        it('TC 5.3.2 Cancel Button is clickable', function () {
            forgotPasswordForm.cancelBtnClickable();
        });

        it('TC 5.3.3 Continue Button is clickable', function () {
            forgotPasswordForm.continueBtnTClickable();
        });

    });

    describe('Verify that Elements functionality works correct', function () {

        it('TC 5.4.1 Cancel Button redirects to Login Page', function () {
            forgotPasswordForm.cancelBtnRedirect();
        });

        it('TC 5.4.2 I forgot My User name link redirects to Recovery User Name Page', function () {
            forgotPasswordForm.forgotUserNameRedirect();
        });

        it('TC 5.4.3 Submitting an empty User name Field throws an error "The Username field is required." ', function () {
            forgotPasswordForm.userNameEmptyErrorMsg();
        });

        it('TC 5.4.4 Submitting correct User name Field , Continue Button redirects to Email Sent Page ', function () {
            forgotPasswordForm.continueButtonRedirects();
        });

        xit('TC 5.4.5 When User Name Field empty error Message text is equal to "The Username field is required." ', function () {
            forgotPasswordForm.userNameEmptyErrorMsgText();
        });


    });

});
