import forgotPasswordForm from '../pages/forgotPassword'


describe('Forgot Password', function () { //define sub-suite title by passing a string

    it('TC-103 Open link Forgot Password send to Correct Page', function () { //define test title by passing a string
        forgotPasswordForm.openForgotPasswordPage();
    });

    describe('Verify that all Elements present in Forgot Password Form', function () { //define sub-suite title by passing a string

        it('TC 5.1.1 Header Title "CONNECTION" is displayed', function () { //define test title by passing a string
            forgotPasswordForm.passwordTitleConnectionDisplayed();
        });

        it('TC 5.1.2 Header Title "Forgot Password?" is displayed', function () { //define test title by passing a string
            forgotPasswordForm.passwordTitleForgotPasswordDisplayed();
        });

        it('TC 5.1.3 Supportive text is displayed ', function () { //define test title by passing a string
            forgotPasswordForm.passwordTitleTellUsDisplayed();
        });

        it('TC 5.1.4 I Forgot my User Name link is displayed', function () { //define test title by passing a string
            forgotPasswordForm.linkIForgotMyUserNameDisplayed();
        });

        it('TC 5.1.5 User Name Field is displayed', function () { //define test title by passing a string
            forgotPasswordForm.userNameRequiredDisplayed();
        });

        it('TC 5.1.6 User Name Field Icon is displayed', function () { //define test title by passing a string
            forgotPasswordForm.fieldUserNameDisplayed();
        });

        it('TC 5.1.7 User name Field Label is Displayed', function () { //define test title by passing a string
            forgotPasswordForm.iconUserNameDisplayed();
        });

        it('TC 5.1.8 Cancel Button is displayed', function () { //define test title by passing a string
            forgotPasswordForm.cancelBtnDisplayed();
        });

        it('TC 5.1.9 Continue Button is displayed ', function () { //define test title by passing a string
            forgotPasswordForm.continueBtnDisplayed();
        });

    });
    describe('Verify that all Elements have correct value ', function () {

        it('TC 5.2.1  Header Title text is equal to "CONNECTION"', function () { //define test title by passing a string
            forgotPasswordForm.passwordTitleConnectionText();
        });

        it('TC 5.2.2  Header Title text is equal to "Forgot Password?"', function () { //define test title by passing a string
            forgotPasswordForm.passwordTitleForgotPasswordText();
        });

        it('TC 5.2.3 Supportive text is equal to "Tell us your user name so that we can send you a link to reset your password."', function () { //define test title by passing a string
            forgotPasswordForm.passwordTitleTellUsText();
        });

        it('TC 5.2.4 I Forgot my User name link text is equal to "I forgot my User Name"', function () { //define test title by passing a string
            forgotPasswordForm.linkIForgotMyUserNameText();
        });

        it('TC 5.2.5 User Name Label text is equal to "User name required"', function () { //define test title by passing a string
            forgotPasswordForm.userNameRequiredText();
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
            forgotPasswordForm.forgotMyUserNameLinkClick();
        });

        it('TC 5.3.2 Cancel Button is clickable', function () { //define test title by passing a string
            forgotPasswordForm.cancelBtnClick();
        });

        it('TC 5.3.3 Continue Button is clickable', function () { //define test title by passing a string
            forgotPasswordForm.continueBtnClick();
        });

    });

    describe('Verify that Elements functionality works correct', function () { //define sub-suite title by passing a string

        it('TC 5.4.1 Cancel Button redirects to Login Page', function () { //define test title by passing a string
            forgotPasswordForm.forgotMyUserNameLinkClick();
        });

        it('TC 5.4.2 I forgot My User name link redirects to Recovery User Name Page', function () { //define test title by passing a string
            forgotPasswordForm.cancelBtnClick();
        });

        it('TC 5.4.3 When User name Field is Empty Error Message "The Username field is required." shows up', function () { //define test title by passing a string
            forgotPasswordForm.continueBtnClick();
        });

        it('TC 5.4.4 When User name Field filled out correct, Continue Button redirects to Email Sent Page and message "We sent a message to the email we have for your profile. Please follow the instructions to reset your password." shows up', function () { //define test title by passing a string
            forgotPasswordForm.continueBtnClick();
        });

    });

});