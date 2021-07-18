const BasePage = require("../base_page/base_page");
const Element = require("../base_elements/base_element");
const Collection = require("../base_elements/base_collection.js");
const {
    browser
} = require("protractor");
const {
    element
} = require("protractor");
const {
    Key
} = require("selenium-webdriver");

class CareersPage extends BasePage {
    constructor() {
        super();
        this.url = 'https://www.epam.com/careers';
    }
    open() {
        return super.open(this.url);
    }

    acceptCookie() {
        return new Element('Click Accept Cookie', 'button.cookie-disclaimer__button');
    }
    acceptCookieAction() {
        let locationList = element(by.css('button.cookie-disclaimer__button'));
        browser.actions().click(locationList).perform();
    }
    getLocationDropDown() {
        return new Element('Get location arrow', 'span.select2-selection__arrow');
    }
    getLocationDropDownAction() {
        let locationDropDown = element(by.css('span.select2-selection__arrow'));
        browser.actions().click(locationDropDown).perform();
    }
    selectLocation(location) {
        return new Element('Select location', `//li[text()='${location}']`, true).click();
    }
    getSkills() {
        return new Element('Expand Skills drop-down', `div.selected-params`);
    }
    getSkillsAction() {
        let locationDropDown = element(by.css('div.selected-params'));
        browser.actions().click(locationDropDown).perform();
    }
    getManagement() {
        return new Element('Select Management', '//span[contains(text(), \'Management\')]', true)
    }
    getManagementAction() {
        let locationDropDown = element(by.xpath('//span[contains(text(), \'Management\')]'));
        browser.actions().click(locationDropDown).perform();
    }

    getElement() {
        return new Collection('Get results', 'ul.selected-items li[data-value=\'Management\']');
    }

}

module.exports = CareersPage;