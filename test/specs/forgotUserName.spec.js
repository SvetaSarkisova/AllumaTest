import forgotUserNameForm from '../pages/forgotUserName' ;// import class and methods from base.page


describe('Forgot User Name', function () { //define sub-suite title by passing a string


    describe('Verify that all Elements displayed', function () { //define sub-suite title by passing a string

        it('TC 4.1.1 Header Title "CONNECTIONS" is displayed', function () { //define test title by passing a string
            forgotUserNameForm.openForgotUserNamePage();
            browser.pause(1000)
        });

        it('TC 4.1.2 Header Title "Recover Username" is displayed', function () { //define test title by passing a string
            forgotUserNameForm.titleRecoverUsernameDisplayed()
        });

        it('TC 4.1.3 Email Field is displayed ', function () { //define test title by passing a string
            forgotUserNameForm.emailFieldDisplayed();
        });

        it('TC 4.1.4 Email Label is displayed ', function () { //define test title by passing a string
            forgotUserNameForm.emailLabelDisplayed();
        });

        it('TC 4.1.5 Email Field Icon is displayed', function () { //define test title by passing a string
            forgotUserNameForm.emailFieldIconDisplayed();
        });

        it('TC 4.1.6 I forgot my Password link is displayed', function () { //define test title by passing a string
            forgotUserNameForm.forgotPasswordLinkDisplayed();
        });

        it('TC 4.1.7 Back to Login Button is displayed', function () { //define test title by passing a string
            forgotUserNameForm.backToLoginButtonDisplayed();
        });

        it('TC 4.1.8 Recover Username Button is displayed', function () { //define test title by passing a string
            forgotUserNameForm.recoverUserNameButtonDisplayed();
        });

    });

    describe('Verify that all Elements have correct values', function () {

        it('TC 4.2.1 Header Title text is equal to “CONNECTIONS”', function () { //define test title by passing a string
            forgotUserNameForm.headerTitleConnectionText();
        });

        it('TC 4.2.2 Header Title text is equal to “Recover Username”', function () { //define test title by passing a string
            forgotUserNameForm.headerTitleRecoverUserNameText();
        });

        it('TC 4.2.3 Email label text is equal to "Email required"', function () { //define test title by passing a string
            forgotUserNameForm.emailLabelText();
        });

        it('TC 4.2.4 Forgot Password Link Text is equal to "I forgot my Password"', function () { //define test title by passing a string
            forgotUserNameForm.forgotPasswordLinkText();
        });

        it('TC 4.2.5 Back to Login Button text is equal to "Back to Login"', function () { //define test title by passing a string
            forgotUserNameForm.backToLoginBtnText();
        });

        it('TC 4.2.6 Recover Username Button Text is equal to "Recover Username"', function () { //define test title by passing a string
            forgotUserNameForm.recoverUserNameBtnText();
        });

    });

    describe('Verify that elements are clickable', function () { //define sub-suite title by passing a string

        it('TC 4.3.1 I Forgot my Password Link is clickable ', function () { //define test title by passing a string
            forgotUserNameForm.forgotPasswordLinkClickable();
        });

        it('TC 4.3.2 Back to Login Button is clickable ', function () { //define test title by passing a string
            forgotUserNameForm.backToLoginBtnClickable();
        });

        it('TC 4.3.3 Recover User Name Button is clickable ', function () { //define test title by passing a string
            forgotUserNameForm.recoverUserNameBtnClickable();
        });

    });

    describe('Verify that Elements functionality woks correct', function () { //define sub-suite title by passing a string

        it('TC TC 4.4.1 I Forgot Password link redirects to Forgot Password Page', function () { //define test title by passing a string
            forgotUserNameForm.forgotMyPasswordRedirects();
        });

        it('TC TC 4.4.2 Back To Login Button redirects to Login Page', function () { //define test title by passing a string
            forgotUserNameForm.backToLoginBtnRedirects();
        });

        it('TC 4.4.3 When Email Field is empty Error Message "The Email field is required." shows up ', function () { //define test title by passing a string
            forgotUserNameForm.emptyEmailError();
        });

        it('TC 4.4.5 When Email Field filled out correct, message "An e-mail with your username has been sent to the entered e-mail address if it corresponds to an active account." shows up', function () { //define test title by passing a string
            forgotUserNameForm.correctEmailResult();
        });

        it('TC 4.4.6 When Email Field filled out correct, message text = "An e-mail with your username has been sent to the entered e-mail address if it corresponds to an active account." shows up', function () { //define test title by passing a string
            forgotUserNameForm.correctEmailResultText();
        });

    });
});

