import login from '../pages/login.page';


describe('Login Form ', function () {

    describe('Verify that all Elements displayed', function () {

        it('TC 3.1.1 Login Form is present', function () {
            login.loginFormDisplayed();
        });

        it('TC 3.1.2 Header Title "CONNECTION" is Displayed  ', function () {
            login.titleConnectionDisplayed();
        });

        it('TC 3.1.3 Header Title "Welcome to Connections" is Displayed ', function () {
            login.titleWelcomeToConnectDisplayed();
        });

        it('TC 3.1.4 Definition Text is Displayed', function () {
            login.definitionTextDisplayed();
        });

        it('TC 3.1.5 Qualify Question is displayed', function () {
            login.qualifyQuestionDisplayed();
        });

        it('TC 3.1.6 Screener link is displayed', function () {
            login.screenerLinkDisplayed();
        });

        it('TC 3.1.7 User Name Field is displayed', function () {
            login.userNameFieldDisplayed();
        });

        it('TC 3.1.8 User Name Label is displayed', function () {
            login.userNameLabelDisplayed();
        });

        it('TC 3.1.9 User Name Field Icon is present', function () {
            login.userNameIconDisplayed();
        });

        it('TC 3.1.10 Password Field is displayed', function () {
            login.passwordFieldDisplayed();
        });

        it('TC 3.1.11 Password Label is displayed', function () {
            login.passwordLabelDisplayed();
        });

        it('TC 3.1.12 Password Field Icon is displayed', function () {
            login.passwordIconDisplayed();
        });

        it('TC 3.1.13 Forgot User name link is displayed ', function () {
            login.forgotUserNameDisplayed();
        });

        it('TC 3.1.14 Forgot Password link is displayed', function () {
            login.forgotPasswordDisplayed();
        });

        it('TC 3.1.15 Login Button is displayed', function () {
            login.loginButtonDisplayed();
        });

        it('TC 3.1.16 Helpful text is displayed ', function () {
            login.helpfulTextDisplayed();
        });

        it('TC 3.1.17 Learn more text is displayed', function () {
            login.learnMoreTextDisplayed();
        });

    });

    describe('Verify that all Elements have correct values', function () { //define sub-suite title by passing a string

        it('TC 3.2.1 Header Title text is equal to "CONNECTIONS"', function () {
            login.headerTitleConnectionsTxt();
        });

        it('TC 3.2.2 Header Title text is equal to "Welcome to Connections"', function () {
            login.headerTitleWelcomeTxt();
        });

        it('TC 3.2.3 Definition text is equal to "Connect people with the benefits they need, with one simple application."', function () {
            login.definitionTextTxt();
        });

        it('TC 3.2.4  Qualify Question text is equal to "Curious what you may qualify for?"', function () {
            login.qualifyQuestionTxt();
        });

        it('TC 3.2.5 Screener link text is equal to  "Try our Quick Screener"', function () {
            login.screenerLinkTxt();
        });

        it('TC 3.2.6 User Name Label text is equal to "User name required"', function () {
            login.userNameLabelTxt();
        });

        it('TC 3.2.7 Password Label text equal to "Password required"', function () {
            login.passwordLabelTxt();
        });

        it('TC 3.2.8 Forgot User Name Link Text is equal to "User Name"', function () {
            login.forgotUserNameLinkTxt();
        });

        it('TC 3.2.9 Forgot Password Link Text is equal to "Password"', function () {
            login.forgotPasswordLinkTxt();
        });

        it('TC 3.2.10 Login Button text is equal to "Log In"', function () {
            login.loginButtonTxt();
        });

        it('TC 3.2.11 Helpful Text is equal to "If you need a user name, contact your system administrator."', function () {
            login.helpfulTextTxt();
        });

        it('TC 3.2.12 Learn more text is equal to "Interested in becoming a Connections user? Learn More"', function () {
            login.learnMoreTextTxt();
        });

        it('TC 3.2.13 Error Message Password Empty is equal to "The Password field is required."', function () {
            login.errorMsgPasswordEmptyTxt();
        });

        xit('TC 3.2.14 Error Message UserName Empty is equal to "The Username field is required."', function () {
            login.errorMsgUserNameEmptyTxt();
        });

        xit('TC 3.2.15 Error Message All Fields Empty is equal to "The Username field is required.The Password field is required."', function () {
            login.errorAllFieldsEmptyTxt();
        });

        xit('TC 3.2.16 Error Message All Fields Incorrect is equal to "Your user name and password does not match anyone in our system. Please try again."', function () {
            login.errorAllFieldsIncorrectTxt();
        });

    });

    describe('Verify that all elements are  clickable', function () {

        it('TC 3.3.1 Screener Link is clickable', function () {
            login.screenerLinkClickable();
        });

        it('TC 3.3.2 Forgot User name Link is clickable', function () {
            login.forgotUserNameLinkClickable();
        });

        it('TC 3.3.3 Forgot Password Link is clickable', function () {
            login.forgotPasswordLinkClickable();
        });

        it('TC 3.3.4 Log In Button is clickable', function () {
            login.loginButtonClickable();
        });
    });

    describe('Verify that Elements functionality works correct', function () {

        xit('TC 3.4.1 Screener link redirects to http://oxcdemo.alluma.org/#/quick/intro', function () {
            login.screenerLinkRedirect();
        }); //not consistent work correctly - not load quick screener page

        it('TC 3.4.2 Forgot User Name link redirects to Recovery UserName Page', function () {
            login.forgotUserNameLinkRedirect();
        });

        it('TC 3.4.3 I Forgot Password Link  redirects to Forgot Password Page', function () {
            login.forgotPasswordLinkRedirect();
        });

        it('TC 3.4.4 Submitting an empty User name Field and Password Field  throws an error "The Username field is required.The Password field is required."', function () {
            login.whenUserNameAndPasswordEmpty();
        });

        it('TC 3.4.5 Submitting an empty User Name Field throws an error  "The Username field is required."', function () {
            login.whenUserNameEmpty();
        });

        it('TC 3.4.6 Submitting an empty Password Field throws an error "The Password field is required." ', function () {
            login.whenPasswordEmpty();
        });

        it('TC 3.4.7 Submitting incorrect UserName and Password data, throws an error "Your user name and password does not match anyone in our system. Please try again."', function () {
            login.whenUserNameAndPasswordIncorrect();
        });


    });
});
