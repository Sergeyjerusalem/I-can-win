const { By, until } = require('selenium-webdriver');
const PasteBin = require('../workingPages/pasteBin');
class ResultPage extends PasteBin {
    constructor(driver) {
        super(driver)

        this.bashIndicator = "//a[@class = 'btn -small h_800'][contains(text(), 'Bash')]";
        this.title = "//div[@class ='info-top']";
        this.code = "//ol[@class ='bash']";

    }

    async waitPage() {
        await this.driver.wait(until.elementLocated(By.xpath(this.bashIndicator)), 3000);

    };

}

module.exports = ResultPage;