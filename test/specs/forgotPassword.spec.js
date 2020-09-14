import forgotPasswordForm from '../pages/forgotPassword'


describe('Forgot Password', function () { //define sub-suite title by passing a string

    describe('Verify that all Elements are displayed', function () { //define sub-suite title by passing a string

        it('TC 5.1.1 Header Title "CONNECTION" is displayed', function () { //define test title by passing a string
            forgotPasswordForm.openForgotPasswordPage();
        });

        it('TC 5.1.2 Header Title "Forgot Password?" is displayed', function () { //define test title by passing a string
            forgotPasswordForm.titleForgotPasswDisplayed();
        });

        it('TC 5.1.3 Supportive text is displayed ', function () { //define test title by passing a string
            forgotPasswordForm.supportiveTextDisplayed();
        });

        it('TC 5.1.4 I Forgot my User Name link is displayed', function () { //define test title by passing a string
            forgotPasswordForm.forgotMyUserNameLinkDisplayed();
        });

        it('TC 5.1.5 User Name Field is displayed', function () { //define test title by passing a string
            forgotPasswordForm.userNameFieldDisplayed();
        });

        it('TC 5.1.6 User Name Field Icon is displayed', function () { //define test title by passing a string
            forgotPasswordForm.userNameFieldIconDisplayed();
        });

        it('TC 5.1.7 User name Field Label is Displayed', function () { //define test title by passing a string
            forgotPasswordForm.userNameFieldLabelDisplayed();
        });

        it('TC 5.1.8 Cancel Button is displayed', function () { //define test title by passing a string
            forgotPasswordForm.cancelButtonDisplayed();
        });

        it('TC 5.1.9 Continue Button is displayed ', function () { //define test title by passing a string
            forgotPasswordForm.continueButtonDisplayed();
        });

    });
    describe('Verify that all Elements have correct value ', function () {

        it('TC 5.2.1  Header Title text is equal to "CONNECTION"', function () { //define test title by passing a string
            forgotPasswordForm.headerTitleConnectionText();
        });

        it('TC 5.2.2  Header Title text is equal to "Forgot Password?"', function () { //define test title by passing a string
            forgotPasswordForm.headerTitleForgotPasswordText();
        });

        it('TC 5.2.3 Supportive text is equal to "Tell us your user name so that we can send you a link to reset your password."', function () { //define test title by passing a string
            forgotPasswordForm.supportiveTextTxt();
        });

        it('TC 5.2.4 I Forgot my User name link text is equal to "I forgot my User Name"', function () { //define test title by passing a string
            forgotPasswordForm.forgotMyUserNameLinkText();
        });

        it('TC 5.2.5 User Name Label text is equal to "User name required"', function () { //define test title by passing a string
            forgotPasswordForm.userNameLabelText();
        });

        it('TC 5.2.6 Cancel Button text is equal to "Cancel"', function () { //define test title by passing a string
            forgotPasswordForm.cancelBtnText();
        });

        it('TC 5.2.7 Continue Button text is equal to "Continue"', function () { //define test title by passing a string
            forgotPasswordForm.continueBtnText();
        });

    });

    describe('Verify that elements are  clickable', function () { //define sub-suite title by passing a string

        it('TC 5.3.1 I Forgot My User name link is clickable', function () { //define test title by passing a string
            forgotPasswordForm.forgotUserNameLinkClickable();
        });

        it('TC 5.3.2 Cancel Button is clickable', function () { //define test title by passing a string
            forgotPasswordForm.cancelBtnClickable();
        });

        it('TC 5.3.3 Continue Button is clickable', function () { //define test title by passing a string
            forgotPasswordForm.continueBtnTClickable();
        });

    });

    describe('Verify that Elements functionality works correct', function () { //define sub-suite title by passing a string

        it('TC 5.4.1 Cancel Button redirects to Login Page', function () { //define test title by passing a string
            forgotPasswordForm.cancelBtnRedirect();
        });

        it('TC 5.4.2 I forgot My User name link redirects to Recovery User Name Page', function () { //define test title by passing a string
            forgotPasswordForm.forgotUserNameRedirect();
        });

        it('TC 5.4.3 When User name Field is Empty Error Message "The Username field is required." shows up', function () { //define test title by passing a string
            forgotPasswordForm.userNameEmptyErrorMsg();
        });

        it('TC 5.4.4 When User name Field filled out correct, Continue Button redirects to Email Sent Page ', function () { //define test title by passing a string
            forgotPasswordForm.continueButtonRedirects();
        });

        xit('TC 5.4.5 When User Name Field empty error Message text is equal to "The Username field is required." ', function () { //define test title by passing a string
            forgotPasswordForm.userNameEmptyErrorMsgText();
        });


    });

});