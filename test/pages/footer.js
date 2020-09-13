import { assert } from 'chai';
import Base from './base';
import selects from '../selectors/footer.selectors';
import expect from '../expectedResult/footer.res';

class Footer extends Base {


    footerIsDisplayed(){
        this.openPage();
        const footerPresent = $(selects.footerPresent).isDisplayed();
        assert.isTrue(footerPresent);
    }

    aboutSiteSignDisplayed() {
        const info = $(selects.aboutThisSite).isDisplayed();
        assert.isTrue(info);
    }

    getHelpDisplayed() {
        const info = $(selects.getHelp).isDisplayed();
        assert.isTrue(info);
    }

    stayInTouchDisplayed() {
        const info = $(selects.stayInTouch).isDisplayed();
        assert.isTrue(info);
    }

    siteLink1Displayed() {
        const link1 = $(selects.link1).isDisplayed();
        assert.isTrue(link1);
    }

    siteLink2Displayed() {
        const link2 = $(selects.link2).isDisplayed();
        assert.isTrue(link2);
    }

    phoneNumberDisplayed() {
        const phone = $(selects.phone).isDisplayed();
        assert.isTrue(phone);
    }

    emailLinkDisplayed() {
        const email = $(selects.email).isDisplayed();
        assert.isTrue(email);
    }

    faxNumberDisplayed() {
        const fax = $(selects.fax).isDisplayed();
        assert.isTrue(fax);
    }

    facebookIconDisplayed() {
        const facebook = $(selects.iconFacebook).isDisplayed()
        assert.isTrue(facebook);
    }

    twitterIconDisplayed() {
        const twitter = $(selects.iconTwitter).isDisplayed();
        assert.isTrue(twitter);
    }

    linkedInIconDisplayed() {
        const linkedIn = $(selects.iconLinkedIn).isDisplayed();
        assert.isTrue(linkedIn);
    }

    allumaLogoDisplayed() {
        const allumaLogo = $(selects.allumaLogo).isDisplayed();
        assert.isTrue(allumaLogo);
    }

    copyrightDisplayed() {
        const copyright = $$(selects.copyright2019)[2].isDisplayed();
        assert.isTrue(copyright);
    }

    allumaLinkDisplayed() {
        const allumaLink = $(selects.linkAlluma).isDisplayed();
        assert.isTrue(allumaLink);
    }

    privacyPolicyDisplayed() {
        const privacyPolicy = $(selects.linkPrivacyPolicy).isDisplayed();
        assert.isTrue(privacyPolicy);
    }

    nonDiscrLinkDisplayed() {
        const nonDiscrLink = $(selects.linkNonDiscriminationPolicy).isDisplayed();
        assert.isTrue(nonDiscrLink);
    }

    termsOfUseDisplayed() {
        const termsOfUse = $(selects.linkTerms).isDisplayed();
        assert.isTrue(termsOfUse);
    }

    aboutThisSiteText() {
        const aboutThisSite = $(selects.aboutThisSite).getText();
        assert.equal(aboutThisSite, expect.aboutSite);
    }

    getHelpText() {
        const getHelp = $(selects.getHelp).getText();
        assert.equal(getHelp, expect.getHelpText);
    }

    stayInTouchText() {
        const stayInTouch = $(selects.stayInTouch).getText();
        assert.equal(stayInTouch, expect.stayInTouchText);
    }

    siteLink1Text() {
        const link1 = $(selects.link1).getText();
        assert.equal(link1, expect.link1Text);
    }

    siteLink2Text() {
        const link2 = $(selects.link2).getText();
        assert.equal(link2, expect.link2Text);
    }

    phoneNumberText() {
        const phone = $(selects.phone).getText();
        assert.equal(phone, expect.phoneText);
    }

    emailLinkText() {
        const email = $(selects.email).getText();
        assert.equal(email, expect.emailText);
    }

    faxNumberText() {
        const fax = $(selects.fax).getText();
        assert.equal(fax, expect.faxText);
    }

    copyrightext() {
        const copy = $$(selects.copyright2019)[2].getText()
        assert.equal(copy, expect.copyright2019Text);
    }

    linkAllumaText() {
        const linkAlluma = $(selects.linkAlluma).getText()
        assert.equal(linkAlluma, expect.linkAllumaText);
    }


    privacyPolicyLinkText() {
        const privacyLink = $$(selects.linkPrivacyPolicy)[2].getText()
        assert.equal(privacyLink, expect.linkPolicyText);
    }


    nonDiscrimLinkTxt() {
        const nonDiscrimTxt = $$(selects.linkNonDiscriminationPolicy)[3].getText()
        assert.equal(nonDiscrimTxt, expect.linkNonDiscriminationPolicyText);
    }


    termsLinkTxt() {
        const termsTxt = $$(selects.linkTerms)[4].getText()
        assert.equal(termsTxt, expect.linkTermsText);
    }

    emailLinkClickable() {
        const clickEmail= $(selects.email).isClickable();
        assert.equal(clickEmail, true);
    }

    facebookIconClickable() {
        const facebook= $(selects.iconFacebook).isClickable();
        assert.equal(facebook, true);
    }

    twitterIconClickable() {
        const twitter= $(selects.iconTwitter).isClickable();
        assert.equal(twitter, true);
    }

    linkedInIconClickable() {
        const linkedIn = $(selects.iconLinkedIn).isClickable();
        assert.equal(linkedIn, true);
    }

    allumaLogoClickable() {
        const allumaLogo = $(selects.allumaLogo).isClickable();
        assert.equal(allumaLogo, true);
    }

    allumaLinkClickable() {
        const allumaLink = $(selects.linkAlluma).isClickable();
        assert.equal(allumaLink, true);
    }

    emailRedirect(){
        const href = $(selects.email).getAttribute('href');
        assert.equal(href, expect.emailUrl);
    }

    allumaLinkRedirect() {
        this.openPage();
        $(selects.linkAlluma).click();
        const allumaLink = browser.getUrl();
        assert.equal(allumaLink, expect.allumaPageLink);
    }

    allumaLogoRedirect() {
        this.openPage();
        $(selects.allumaLogo).click();
        const allumaIcon = browser.getUrl();
        assert.equal(allumaIcon, expect.allumaPageLink);
    }

    facebookIconRedirect() {
        this.openPage();
        $(selects.iconFacebook).click();
        const facebookIcon = browser.getUrl();
        assert.equal(facebookIcon, expect.facebookLink );
    }

    twitterIconRedirect() {
        this.openPage();
        $(selects.iconTwitter).click();
        const twitterIcon = browser.getUrl();
        assert.equal(twitterIcon, expect.twitterLink );
    }

    linkedInIconRedirect() {
        this.openPage();
        $(selects.linkAlluma).click();
        const linkedIn = browser.getUrl();
        assert.equal(linkedIn, expect.linkedInLink );
    }

}

export default new Footer();