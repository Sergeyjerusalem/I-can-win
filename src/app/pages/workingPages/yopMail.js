const { By, until } = require('selenium-webdriver');
const BasePage = require('../basePage');

class YopMail extends BasePage {
    constructor(driver) {
        super(driver)
        this.title = "//span[@class = 'notmobile']";
        this.mailInput = "//input[@class = 'ycptinput']";
        this.mailSubmitButton = "//input[@type = 'submit']";
        this.alias = '//span[@class = "nw b"]';
        this.emailInput = "//input[@name='description' and @type = 'email']"
        this.refreshButton = '//*[@id="refresh"]';
        this.totalCostym = '//td[contains(text(), "USD")]';
        this.frameYm = '//*[@id="ifmail"]'
        this.deleteButton = '//button[@onclick= "w.suppr_mail();"]'

    }

    async waitMailTitle() {
        await this.driver.wait(until.elementLocated(By.xpath(this.mailInput)), 5000);

    };

    async waitAlias() {
        await this.driver.wait(async () => {
            const input = await this.driver.findElement(By.xpath(this.alias));
            return !!input
        }, 5000);
    };

    async waitRefresh() {
        await this.driver.wait(until.elementLocated(By.xpath(this.refreshButton)), 5000);
        await this.driver.sleep(2000);

    };

    async waitTotalCost() {
        await this.driver.wait(until.ableToSwitchToFrame(By.xpath(this.frameYm)), 3000);
        await this.driver.wait(until.elementLocated(By.xpath(this.totalCostym)));
    }

    async deleteMail() {
        const target = await this.driver.findElement(By.xpath(this.deleteButton));
        await target.click();
        await this.driver.sleep(4000)

    }


}

module.exports = YopMail;