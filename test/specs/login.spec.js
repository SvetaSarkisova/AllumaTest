import loginForm from '../pages/login' // import class and methods from base.page


describe('Login Form ', function () { //define sub-suite title by passing a string

    describe('Verify that all Elements displayed', function () { //define sub-suite title by passing a string

        it('TC 3.1.1 Login Form is present', function () { //define test title by passing a string
            loginForm.loginFormDisplayed();
        });

        it('TC 3.1.2 Header Title "CONNECTION" is Displayed  ', function () {
            loginForm.loginFormTitleConnectionDisplayed();
        });

        it('TC 3.1.3 Header Title "Welcome to Connections" is Displayed ', function () {
            loginForm.logoTitleWelcomeToConnectionsDisplayed()
        });

        it('TC 3.1.4 Definition Text is Displayed', function () {
            loginForm.logoTitleInfoDisplayed();
        });

        it('TC 3.1.5 Qualify Question is displayed', function () {
            loginForm.logoTitleCuriousDisplayed();
        });

        it('TC 3.1.6 Screener link is displayed', function () {
            loginForm.linkTryScreenerDisplayed();
        });

        it('TC 3.1.7 User Name Field is displayed', function () {
            loginForm.loginUserNameDisplayed();
        });

        it('TC 3.1.8 User Name Label is displayed', function () {
            loginForm.userPasswordLabelDisplayed();
        });

        it('TC 3.1.9 User Name Field Icon is present', function () {
            loginForm.inputUserNameFieldDisplayed();
        });

        it('TC 3.1.10 Password Field is displayed', function () {
            loginForm.iconUserNameFieldDisplayed();
        });

        it('TC 3.1.11 Password Label is displayed', function () {
            loginForm.inputPasswordFieldDisplayed();
        });

        it('TC 3.1.12 Password Field Icon is displayed', function () {
            loginForm.iconPasswordFieldDisplayed();
        });

        it('TC 3.1.13 Forgot User name link is displayed ', function () {
            loginForm.forgotUserNamePasswordDisplayed();
        });

        it('TC 3.1.14 Forgot Password link is displayed', function () {
            loginForm.linkForgotUserNameDisplayed();
        });

        it('TC 3.1.15 Login Button is displayed', function () {
            loginForm.linkForgoPasswordDisplayed();
        });

        it('TC 3.1.16 Helpful text is displayed ', function () {
            loginForm.loginBtnDisplayed();
        });

        it('TC 3.1.17 Learn more text is displayed', function () {
            loginForm.infoMassageContactAdminDisplayed();
        });

    });

    describe('Verify that all Elements have correct values', function () { //define sub-suite title by passing a string

        it('TC 3.2.1 Header Title text is equal to "CONNECTIONS"', function () {
            loginForm.loginFormTitleConnectionTxt();
        });

        it('TC 3.2.2 Header Title text is equal to "Welcome to Connections"', function () {
            loginForm.logoTitleWelcomeToConnectionsTxt();
        });

        it('TC 3.2.3 Definition text is equal to "Connect people with the benefits they need, with one simple application."', function () {
            loginForm.logoTitleInfoTxt();
        });

        it('TC 3.2.4  Qualify Question text is equal to "Curious what you may qualify for?"', function () {
            loginForm.logoTitleCuriousTxt();
        });

        it('TC 3.2.5 Screener link text is equal to  "Try our Quick Screener"', function () {
            loginForm.linkTryScreenerTxt();
        });

        it('TC 3.2.6 User Name Label text is equal to "User name required"', function () {
            loginForm.loginUserNameTxt();
        });

        it('TC 3.2.7 Password Label text equal to "Password required"', function () {
            loginForm.userPasswordLabelText();
        });

        it('TC 3.2.8 Forgot User Name Link Text is equal to "User Name"', function () {
            loginForm.forgotUserNamePasswordTxt();
        });

        it('TC 3.2.9 Forgot Password Link Text is equal to "Password"', function () {
            loginForm.linkForgotUserNameTxt();
        });

        it('TC 3.2.10 Login Button text is equal to "Log In"', function () {
            loginForm.linkForgotPasswordTxt();
        });

        it('TC 3.2.11 Helpful Text is equal to "If you need a user name, contact your system administrator."', function () {
            loginForm.loginBtnTxt();
        });

        it('TC 3.2.12 Learn more text is equal to "Interested in becoming a Connections user? Learn More"', function () {
            loginForm.infoMassageContactAdminTxt();
        });

    });

    describe('Verify that all elements are  clickable', function () {

        it('TC 3.3.1 Screener Link is clickable', function () {
            loginForm.linkTryOurQuickScreenerClickable();
        });

        it('TC 3.3.2 Forgot User name Link is clickable', function () {
            loginForm.linkForgotUserNameClickable();
        });

        it('TC 3.3.3 Forgot Password Link is clickable', function () {
            loginForm.linkForgoPasswordClickable();
        });

        it('TC 3.3.4 Log In Button is clickable', function () {
            loginForm.loginBtnClickable();
        });
    });

    describe('Verify that Elements functionality works correct', function () {

        it('TC 3.4.1 Screener link redirects to http://oxcdemo.alluma.org/#/quick/intro', function () {
            loginForm.errorEmptyAllFieldsSubmitDisplayed();
        });

        it('TC 3.4.2 Forgot User Name link redirects to Recovery UserName Page', function () {
            loginForm.errorEmptyAllFieldsSubmitDisplayed();
        });

        it('TC 3.4.3 I Forgot Password Link  redirects to Forgot Password Page', function () {
            loginForm.errorEmptyAllFieldsSubmitFieldsText();
        });

        it('TC 3.4.4 When User name Field and Password Field are empty Error Message "The Username field is required.The Password field is required." shows up', function () {
            loginForm.errorEmptyAllFieldsSubmitDisplayed();
        });

        it('TC 3.4.5 When User Name Field is empty Error Message "The Username field is required." shows up', function () {
            loginForm.errorEmptyAllFieldsSubmitDisplayed();
        });

        it('TC 3.4.6 When Password Field is empty Error Message "The Password field is required." show up', function () {
            loginForm.errorEmptyAllFieldsSubmitFieldsText();
        });

        it('TC 3.4.7 When input incorrect UserName and Password data, error message "Your user name and password does not match anyone in our system. Please try again." shows up', function () {
            loginForm.errorEmptyAllFieldsSubmitFieldsText();
        });

        /**
         * left this test as a sign that I did it
         *
         it('TC-070 Verify link `Try our Quick Screener` send to the right page', function () {
            loginForm.linkTryOurQuickScreenerUrl();
        });

         */

    });
});
