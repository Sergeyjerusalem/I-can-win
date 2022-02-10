const { By, until } = require('selenium-webdriver');
const BasePage = require('../basePage');
class PasteBin extends BasePage {
    constructor(driver) {
        super(driver)
        this.url = 'https://pastebin.com/'

        this.pasteButton = '//a[@class = "header__btn"]'
        this.textArea = "//textarea[@id='postform-text']";
        this.syntaxHighlighting = "//span[@id= 'select2-postform-format-container']";
        this.higlightOption = "//li[@class='select2-results__option'][contains(text(),'Bash')]";
        
        this.expiration = "//span[@id='select2-postform-expiration-container']";
        this.expirationOption = "//li[@class='select2-results__option'][contains(text(),'10 Minutes')]";

        this.pastName = "//input[@id='postform-name']";
        this.submitButton = "//button[@type='submit']";

        this.message = 'git config --global user.name  "New Sheriff in Town"\ngit reset $(git commit-tree HEAD^{tree} -m "Legacy code")\ngit push origin master --force'
    }

    async waitTextArea() {
        await this.driver.wait(until.elementLocated(By.xpath(this.textArea)), 3000);

    };

    async pasteHiglightOption() {
        const syntaxHighlighting = await this.driver.findElement(By.xpath(this.syntaxHighlighting));
        await this.driver.wait(until.elementIsVisible(syntaxHighlighting), 5000);
        await syntaxHighlighting.click();
        const syntaxHighlightingOption = await this.driver.findElement(By.xpath(this.higlightOption));
        await this.driver.wait(until.elementIsVisible(syntaxHighlightingOption), 5000);
        await syntaxHighlightingOption.click();

    };

    async pasteExpirationOption() {
        const expiration = await this.driver.findElement(By.xpath(this.expiration));
        await this.driver.wait(until.elementIsVisible(expiration), 5000);
        await expiration.click();
        const expirationOption = await this.driver.findElement(By.xpath(this.expirationOption));
        await this.driver.wait(until.elementIsVisible(expirationOption), 5000);
        await expirationOption.click();
    };

    async waitPastName() {
        const pastName = await this.driver.findElement(By.xpath(this.pastName));
        await this.driver.wait(until.elementIsVisible(pastName), 5000);
    };

    async selectSearchTitle(position) {
        const target = (await this.driver.findElements(By.xpath(this.searchTitle)))[position];
        await target.click();
    };

    async sendPaste() {
        const target = await this.driver.findElement(By.xpath(this.textArea));
        await target.sendKeys(this.message);
    }
}

module.exports = PasteBin;