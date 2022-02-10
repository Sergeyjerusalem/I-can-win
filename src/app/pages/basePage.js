const { By, Key } = require('selenium-webdriver');


class BasePage {
    constructor(driver) {
        this.driver = driver;
        //this.url = null;
    }

    async getPage() {
        await this.driver.get(`${this.url}`);
        return this;
    };

    async click(element) {
        const target = await this.driver.findElement(By.xpath(this[element]));
        await target.click();
    }

    async sendKeys(element, message) {
        const target = await this.driver.findElement(By.xpath(this[element]));
        await target.sendKeys(message);
    }

    async getText(element) {
        let el = await this.driver.findElement(By.xpath(this[element]));
        this.text = await el.getText();
        console.log(this.text);
        return this.text;
    };

}

module.exports = BasePage;