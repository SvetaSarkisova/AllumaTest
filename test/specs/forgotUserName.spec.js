import forgotUserNameForm from '../pages/forgotUserName.page' ;


describe('Forgot User Name', function () {


    describe('Verify that all Elements displayed', function () {

        it('TC 4.1.1 Header Title "CONNECTIONS" is displayed', function () {
            forgotUserNameForm.openForgotUserNamePage();
            browser.pause(1000);
        });

        it('TC 4.1.2 Header Title "Recover Username" is displayed', function () {
            forgotUserNameForm.titleRecoverUsernameDisplayed();
        });

        it('TC 4.1.3 Email Field is displayed ', function () {
            forgotUserNameForm.emailFieldDisplayed();
        });

        it('TC 4.1.4 Email Label is displayed ', function () {
            forgotUserNameForm.emailLabelDisplayed();
        });

        it('TC 4.1.5 Email Field Icon is displayed', function () {
            forgotUserNameForm.emailFieldIconDisplayed();
        });

        it('TC 4.1.6 I forgot my Password link is displayed', function () {
            forgotUserNameForm.forgotPasswordLinkDisplayed();
        });

        it('TC 4.1.7 Back to Login Button is displayed', function () {
            forgotUserNameForm.backToLoginButtonDisplayed();
        });

        it('TC 4.1.8 Recover Username Button is displayed', function () {
            forgotUserNameForm.recoverUserNameButtonDisplayed();
        });

    });

    describe('Verify that all Elements have correct values', function () {

        it('TC 4.2.1 Header Title text is equal to “CONNECTIONS”', function () {
            forgotUserNameForm.headerTitleConnectionText();
        });

        it('TC 4.2.2 Header Title text is equal to “Recover Username”', function () {
            forgotUserNameForm.headerTitleRecoverUserNameText();
        });

        it('TC 4.2.3 Email label text is equal to "Email required"', function () {
            forgotUserNameForm.emailLabelText();
        });

        it('TC 4.2.4 Forgot Password Link Text is equal to "I forgot my Password"', function () {
            forgotUserNameForm.forgotPasswordLinkText();
        });

        it('TC 4.2.5 Back to Login Button text is equal to "Back to Login"', function () {
            forgotUserNameForm.backToLoginBtnText();
        });

        it('TC 4.2.6 Recover Username Button Text is equal to "Recover Username"', function () {
            forgotUserNameForm.recoverUserNameBtnText();
        });

    });

    describe('Verify that elements are clickable', function () {

        it('TC 4.3.1 I Forgot my Password Link is clickable ', function () {
            forgotUserNameForm.forgotPasswordLinkClickable();
        });

        it('TC 4.3.2 Back to Login Button is clickable ', function () {
            forgotUserNameForm.backToLoginBtnClickable();
        });

        it('TC 4.3.3 Recover User Name Button is clickable ', function () {
            forgotUserNameForm.recoverUserNameBtnClickable();
        });

    });

    describe('Verify that Elements functionality woks correct', function () {

        it('TC TC 4.4.1 I Forgot Password link redirects to Forgot Password Page', function () {
            forgotUserNameForm.forgotMyPasswordRedirects();
        });

        it('TC TC 4.4.2 Back To Login Button redirects to Login Page', function () {
            forgotUserNameForm.backToLoginBtnRedirects();
        });

        it('TC 4.4.3 Submitting an empty Email Field throws an error "The Email field is required." ', function () {
            forgotUserNameForm.emptyEmailError();
        });

        it('TC 4.4.5 Submitting correct Email Field, message "An e-mail with your username has been sent to the entered e-mail address if it corresponds to an active account." shows up', function () { //define test title by passing a string
            forgotUserNameForm.correctEmailResult();
        });

        it('TC 4.4.6 When Email Field filled out correct, message text = "An e-mail with your username has been sent to the entered e-mail address if it corresponds to an active account." shows up', function () { //define test title by passing a string
            forgotUserNameForm.correctEmailResultText();
        });

    });
});

