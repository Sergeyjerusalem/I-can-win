const { By, Key } = require('selenium-webdriver');


class BasePage {
    constructor(driver) {
        this.driver = driver;
        this.url = null;
        this.originalWindow = null;
        this.text = null;
    }

    async getPage() {
        await this.driver.get(`${this.url}`);

    };

    async click(element) {
        const target = await this.driver.findElement(By.xpath(this[element]));
        await target.click();
    }

    async sendKeys(element, message) {
        const target = await this.driver.findElement(By.xpath(this[element]));
        await target.sendKeys(message, Key.ENTER);
    }

    async space(){
        this.driver.findElement(By.css("body")).sendKeys(Key.SPACE);
    }

    async openNewPage() {
        await this.driver.switchTo().newWindow('tab');
        await this.driver.get('https://yopmail.com/ru/');

    }

    async windowOri() {
        this.originalWindow = await this.driver.getWindowHandle();
        await this.driver.switchTo().window(this.originalWindow);

    }

    async switchtoPage() {
        const windows = await this.driver.getAllWindowHandles();
        windows.forEach(async handle => {
            if (handle !== this.originalWindow) {
                await this.driver.switchTo().window(handle);
            }
        });
    }

    async returnToPage() {
        await this.driver.switchTo().window(this.originalWindow);

    }

    async getText(element) {
        let el = await this.driver.findElement(By.xpath(this[element]));
        this.text = await el.getText();
        console.log(this.text);
        return this.text;

    };

    async sendMail(element) {
        const target = await this.driver.findElement(By.xpath(this[element]));
        await target.sendKeys(this.text);
    };
    

    async refresh() {
        await this.driver.sleep(2000)
        await this.driver.navigate().refresh();

    };
}

module.exports = BasePage;