import footer from '../pages/footer' // import class and methods from footer.page

describe('Footer', function () { //define sub-suite title by passing a string

    describe('Verify that all Elements are present in Footer', function () {

        it('TC 2.1.1 Footer is Displayed', function () {
            footer.footerIsDisplayed();
        });

        it('TC 2.1.2 "About this site" column sign is displayed ', function () {
            footer.aboutSiteSignDisplayed();
        });

        it('TC 2.1.3 "Get help" column sign  is displayed ', function () {
            footer.getHelpDisplayed();
        });

        it('TC 2.1.4 "Stay in touch" column sign is displayed ', function () {
            footer.stayInTouchDisplayed();
        });

        it('TC 2.1.5 Site Link 1 is displayed ', function () {
            footer.siteLink1Displayed();
        });

        it('TC 2.1.6 Site Link 2 is displayed ', function () {
            footer.siteLink2Displayed();
        });

        it('TC 2.1.7 Phone number is displayed ', function () {
            footer.phoneNumberDisplayed();
        });

        it('TC 2.1.8 Email link  is displayed ', function () {
            footer.emailLinkDisplayed();
        });

        it('TC 2.1.9 Fax number is displayed', function () {
            footer.faxNumberDisplayed();
        });

        it('TC 2.1.10 Facebook Icon is displayed ', function () {
            footer.facebookIconDisplayed();
        });

        it('TC 2.1.11 Twitter Icon is displayed ', function () {
            footer.twitterIconDisplayed();
        });

        it('TC 2.1.12 LinkedIn Icon is displayed ', function () {
            footer.linkedInIconDisplayed();
        });

        it('TC 2.1.13 Alluma Logo is displayed', function () {
            footer.allumaLogoDisplayed();
        });

        it('TC 2.1.14 Copyright is displayed', function () {
            footer.copyrightDisplayed();
        });

        it('TC 2.1.15 Alluma Link is displayed', function () {
            footer.allumaLinkDisplayed();
        });

        it('TC 2.1.16 Privacy Policy Link is Displayed', function () {
            footer.privacyPolicyDisplayed();
        });

        it('TC 2.1.17 Non-discimination Policy Link is Displayed', function () {
            footer.nonDiscrLinkDisplayed();
        });

        it('TC 2.1.18 Terms of use Link is Displayed ', function () {
            footer.termsOfUseDisplayed();
        });

    });

    describe('Verify that all Footer Elements have correct values', function () {

        it('TC 2.2.1 "About this site" sign text is equal to "About this site"', function () {
            footer.aboutThisSiteText();
        });

        it('TC 2.2.2 "Get help" sign text is equal to "Get help" ', function () {
            footer.getHelpText();
        });

        it('TC 2.2.3 "Stay in touch" sign text is equal to  "Stay in touch"', function () {
            footer.stayInTouchText();
        });

        it('TC 2.2.4 Site Link 1 text is equal to "Site Link 1"', function () {
            footer.siteLink1Text();
        });

        it('TC 2.2.5 Site Link 2 text is equal to "Site Link 2"', function () {
            footer.siteLink2Text();
        });

        it('TC 2.2.6 Phone number text is equal to "888-888-8888"', function () {
            footer.phoneNumberText();
        });

        it('TC 2.2.7 Email link text is equal to "support@email.com"', function () {
            footer.emailLinkText();
        });

        it('TC 2.2.8 Fax number text is equal to "Fax: 777-777-7777"', function () {
            footer.faxNumberText();
        });

        it('TC 2.2.9 Copyright text is equal to "Copyright 2019"', function () {
            footer.copyrightext();
        });

        it('TC 2.2.10 Alluma link text is equal to " Alluma"', function () {
            footer.linkAllumaText();
        });

        it('TC 2.2.11  Privacy Policy link text is equal to "Privacy Policy"', function () {
            footer.privacyPolicyLinkText();
        });

        it('TC 2.2.12 Non-discimination Policy Link text is equal to "Non-discimination Policy "', function () {
            footer.nonDiscrimLinkTxt();
        });

        it('TC 2.2.13 Terms of Use Link text is equal to "Terms of Use"', function () {
            footer.termsLinkTxt();
        });

    });
    describe('Verify that all elements are clickable', function () {

        it('TC 2.3.1 Email link is clickable', function () {
            footer.emailLinkClickable();
        });

        it('TC 2.3.2 Facebook icon is clickable', function () {
            footer.facebookIconClickable();
        });

        it('TC 2.3.3 Twitter icon is clickable', function () {
            footer.twitterIconClickable();
        });

        it('TC 2.3.4 LinkedIn icon is clickable', function () {
            footer.linkedInIconClickable();
        });

        it('TC 2.3.5 Alluma logo is clickable', function () {
            footer.allumaLogoClickable();
        });

        it('TC 2.3.6 Alluma link is clickable', function () {
            footer.allumaLinkClickable();
        });

    });

    describe('Verify that all Elements functionality works correct', function () {

        it('TC 2.4.1 Email Link redirects to email', function () {
            footer.emailRedirect()
        });

        it('TC 2.4.2 Alluma Logo redirects to https://www.alluma.org/ ', function () {
            footer.allumaLogoRedirect()
        });

        it('TC 2.4.3 Alluma Link redirects to https://www.alluma.org/ ', function () {
            footer.allumaLinkRedirect()
        });

        it('TC 2.4.4 Facebook Icon redirect to https://www.facebook.com/WeAreAlluma/?ref=page_internal', function () {
            footer.facebookIconRedirect();
        });

        it('TC 2.4.5 Twitter Icon redirect to https://twitter.com/WeAreAlluma ', function () {
            footer.twitterIconRedirect()
        });

        it('TC 2.4.6 LinkedIn Icon redirect to https://www.linkedin.com/company/we-are-alluma/ ', function () {
            footer.linkedInIconRedirect()
        });

    });
});