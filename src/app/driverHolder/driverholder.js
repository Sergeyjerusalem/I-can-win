const { Builder} = require('selenium-webdriver');


class DriverHolder {
    constructor() {
        this._driver = null;
    }
    async getDriver() {
        if (!this.driver) {
            this._driver = await new Builder()
                .forBrowser('chrome')
                .build();
        }
        return this._driver;

    };

    async clear() {
        await this._driver.executeScript('window.sessionStorage.clear();');
        await this._driver.navigate().refresh();
    }

}

module.exports = DriverHolder;