const { Builder } = require('selenium-webdriver');
const { Options } = require('selenium-webdriver/chrome');



class DriverHolder {
    constructor() {
        this._driver = null;


    }
    async getDriver() {
        let options = new Options();
        options.addArguments('ignore-certificate-errors');
        options.addArguments('ignore-ssl-errors');
        options.addArguments('incognito');


        if (!this.driver) {
            this._driver = await new Builder()
                .forBrowser('chrome')
                .setChromeOptions(options)
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