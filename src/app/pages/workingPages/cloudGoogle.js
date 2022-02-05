const { By, until } = require('selenium-webdriver');
const BasePage = require('../basePage');
class CloudGooglePage extends BasePage {
    constructor(driver) {
        super(driver)
        this.url = 'https://cloud.google.com/'
        this.searchLabel = ".//input[@aria-label='Search']";
        this.searchInput = "//input[@class ='devsite-search-field devsite-search-query']";
        this.searchTitle = "//*[@class='gs-title']/descendant::b[text() = 'Google Cloud Pricing Calculator']";
    }

    async waitLabel() {
        await this.driver.wait(async () => {
            const label = await this.driver.findElement(By.xpath(this.searchLabel));
            return !!label
        }, 5000)
    };

    async waitSearchInput() {
        await this.driver.wait(async () => {
            const input = await this.driver.findElement(By.xpath(this.searchInput));
            return !!input
        }, 5000);
    };

    async waitSearchTitle() {
        await this.driver.wait(until.elementLocated(By.xpath(this.searchTitle)), 5000);
    };

    async selectSearchTitle(position) {
        const target = (await this.driver.findElements(By.xpath(this.searchTitle)))[position];
        await target.click();
    };
}

module.exports = CloudGooglePage;