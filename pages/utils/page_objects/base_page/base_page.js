const Header = require('./header');

class BasePage {
    constructor() {
        this.Header = new Header();
    };
    wait(waitInMilliseconds) {
        return browser.sleep(waitInMilliseconds);
    };
    async getCurrentUrl() {
        const currentUrl = browser.getCurrentUrl();
        return currentUrl;
    };
    open(url) {
        return browser.get(url);
    };
};

module.exports = BasePage;