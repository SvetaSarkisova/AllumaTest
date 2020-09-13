import forgotUserName from '../pages/forgotUserName' ;// import class and methods from base.page


describe('Forgot User Name', function () { //define sub-suite title by passing a string

    it('TC-083 Open link Forgot User Name send to Correct Page', function () { //define test title by passing a string
        forgotUserNameForm.openForgotUserNamePage();
    });

    describe('Verify that all Elements displayed', function () { //define sub-suite title by passing a string

        it('TC 4.1.1 Header Title "CONNECTIONS" is displayed', function () { //define test title by passing a string
            forgotUserNameForm.userNameTitleConnectionDisplayed();
        });

        it('TC 4.1.2 Header Title "Recover Username" is displayed', function () { //define test title by passing a string
            forgotUserNameForm.userNameTitleRecoverDisplayed()
        });

        it('TC 4.1.3 Email Field is displayed ', function () { //define test title by passing a string
            forgotUserNameForm.emailLabelDisplayed();
        });

        it('TC 4.1.4 Email Label is displayed ', function () { //define test title by passing a string
            forgotUserNameForm.requiredLabelDisplayed();
        });

        it('TC 4.1.5 Email Field Icon is displayed', function () { //define test title by passing a string
            forgotUserNameForm.userEmailFieldDisplayed();
        });

        it('TC 4.1.6 I forgot my Password link is displayed', function () { //define test title by passing a string
            forgotUserNameForm.userIconDisplayed();
        });

        it('TC 4.1.7 Back to Login Button is displayed', function () { //define test title by passing a string
            forgotUserNameForm.forgotMyPasswordLinkTextDisplayed();
        });

        it('TC 4.1.8 Recover Username Button is displayed', function () { //define test title by passing a string
            forgotUserNameForm.backToLoginBtnDisplayed();
        });

    });

    describe('Verify that all Elements have correct values', function () {

        it('TC 4.2.1 Header Title text is equal to “CONNECTIONS”', function () { //define test title by passing a string
            forgotUserNameForm.userNameTitleConnectionText();
        });

        it('TC 4.2.2 Header Title text is equal to “Recover Username”', function () { //define test title by passing a string
            forgotUserNameForm.userNameTitleRecoverText();
        });

        it('TC 4.2.3 Email label text is equal to "Email required"', function () { //define test title by passing a string
            forgotUserNameForm.emailLabelText();
        });

        it('TC 4.2.4 Forgot Password Link Text is equal to "I forgot my Password"', function () { //define test title by passing a string
            forgotUserNameForm.requiredLabelText();
        });

        it('TC 4.2.5 Back to Login Button text is equal to "Back to Login"', function () { //define test title by passing a string
            forgotUserNameForm.forgotMyPasswordLinkText();
        });

        it('TC 4.2.6 Recover Username Button Text is equal to "Recover Username"', function () { //define test title by passing a string
            forgotUserNameForm.backToLoginBtnText();
        });

    });

    describe('Verify that elements are clickable', function () { //define sub-suite title by passing a string

        it('TC 4.3.1 I Forgot my Password Link is clickable ', function () { //define test title by passing a string
            forgotUserNameForm.forgotMyPasswordLinkClick();
        });

        it('TC 4.3.2 Back to Login Button is clickable ', function () { //define test title by passing a string
            forgotUserNameForm.recoverUserNameBtnClick();
        });

        it('TC 4.3.3 Recover User Name Button is clickable ', function () { //define test title by passing a string
            forgotUserNameForm.backToLoginBtnClick();
        });

    });

    describe('Verify that Elements functionality woks correct', function () { //define sub-suite title by passing a string

        it('TC TC 4.4.1 I Forgot Password link redirects to Forgot Password Page', function () { //define test title by passing a string
            forgotUserNameForm.forgotMyPasswordLinkClick();
        });

        it('TC TC 4.4.2 Back To Login Button redirects to Login Page', function () { //define test title by passing a string
            forgotUserNameForm.recoverUserNameBtnClick();
        });

        it('TC 4.4.3 When Email Field is empty Error Message "The Email field is required." shows up ', function () { //define test title by passing a string
            forgotUserNameForm.backToLoginBtnClick();
        });

        it('TC 4.4.4 When Email Field not includes "@" symbol error message pop up', function () { //define test title by passing a string
            forgotUserNameForm.backToLoginBtnClick();
        });

        it('TC 4.4.5 When Email Field filled out correct, message "An e-mail with your username has been sent to the entered e-mail address if it corresponds to an active account." shows up', function () { //define test title by passing a string
            forgotUserNameForm.backToLoginBtnClick();
        });

    });
});

