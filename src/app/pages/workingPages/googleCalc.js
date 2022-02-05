const { By, until, } = require('selenium-webdriver');
const BasePage = require('../basePage');
class GoogleCalc extends BasePage {
    constructor(driver) {
        super(driver)
        this.numberOfInstance = '//*[@id="input_77"]';
        this.myFrame = '#cloud-site > devsite-iframe > iframe'

        this.operatingSystem = "//*[@id='select_option_79']";
        this.selectIconForSys = '//span[@class="md-select-icon"]/preceding::*[@id="select_value_label_69"]';

        this.class = '//md-option[@id = "select_option_92"]';
        this.selectIconForClass = '//*[@id="select_value_label_70"]';

        this.series = '//md-option[@id="select_option_217" and @value="n1"]';
        this.selectIconForSeries = '//*[@id="select_value_label_72"]';
        this.type = '//md-option[@id="select_option_420"]';
        this.selectIconForMType = '//*[@id="select_value_label_73"]';

        this.selectIconForGpuT = '//md-select[@placeholder="GPU type"]';
        this.selectIconForGpuN = '//md-select[@placeholder="Number of GPUs"]';
        this.gpuCheckBox = '//md-checkbox[@ng-model ="listingCtrl.computeServer.addGPUs"]';
        this.gpuType = '//*[@value = "NVIDIA_TESLA_V100"]';
        this.numberOfGpu = '//md-option[@value="1" and @id = "select_option_464"]';

        this.ssdSelector = '//md-select[@placeholder="Local SSD" and @id = "select_415"]';
        this.ssD = '//md-option[@id="select_option_441"]';

        this.dataCenterSelector = '//md-select[@placeholder="Datacenter location" and @id = "select_110"]'
        this.dataCenter = '//md-option[@id="select_option_238"]';

        this.commitedUsageSelector = '//*[@id="select_117"]';
        this.commUSage = '//*[@id ="select_option_115"]';

        this.addToEstimateButton = '//button[@type="button" and contains(text(), "Add to Estimate")]';
        this.emailEstimateButton = '//button[@aria-label = "Email Estimate"]';
        this.emailSendButton = '//button[@type ="button" and @aria-label = "Send Email"]';
        this.totalCostggl = '//b[@class="ng-binding"]'


    };

    async SwitchtoFrame() {
        await this.driver.switchTo().defaultContent();
        await this.driver.wait(until.ableToSwitchToFrame(By.css(this.myFrame)), 3000);
        await this.driver.switchTo().frame(0);

    };

    async waitNumberOfInstance() {
        await this.driver.wait(async () => {
            const target = await this.driver.findElement(By.xpath(this.numberOfInstance));
            return !!target
        }, 5000)
    };


    async calcSendKeys(element, message) {
        const target = await this.driver.findElement(By.xpath(this[element]));
        await target.sendKeys(message);
        return !!target
    };

    async changeOperatingSys() {
        await this.driver.wait(until.elementLocated(By.xpath(this.selectIconForSys)), 3000);
        const selectIcon = await this.driver.findElement(By.xpath(this.selectIconForSys));
        await selectIcon.click();
        await this.driver.wait(until.elementLocated(By.xpath(this.operatingSystem)), 3000);
        const target = await this.driver.findElement(By.xpath(this.operatingSystem));
        await target.click();
    };

    async changeClass() {
        await this.driver.wait(until.elementLocated(By.xpath(this.selectIconForClass)), 3000);
        const selectIcon = await this.driver.findElement(By.xpath(this.selectIconForClass));
        await selectIcon.click();
        await this.driver.wait(until.elementLocated(By.xpath(this.class)), 3000);
        const target = await this.driver.findElement(By.xpath(this.class));
        await target.click();
    };

    async changeSeries() {
        await this.driver.wait(until.elementLocated(By.xpath(this.selectIconForSeries)), 3000);
        const selectIcon = await this.driver.findElement(By.xpath(this.selectIconForSeries));
        await selectIcon.click();
        await this.driver.wait(until.elementLocated(By.xpath(this.series)), 3000);
        const target = await this.driver.findElement(By.xpath(this.series));
        await target.click();
    };

    async changeType() {
        await this.driver.wait(until.elementLocated(By.xpath(this.selectIconForMType)), 3000);
        const selectIcon = await this.driver.findElement(By.xpath(this.selectIconForMType));
        await selectIcon.click();
        await this.driver.wait(until.elementLocated(By.xpath(this.type)), 3000);
        const target = await this.driver.findElement(By.xpath(this.type));
        await this.driver.wait(until.elementIsVisible(target), 3000);
        await target.click();
    };


    async addGPU() {
        await this.driver.wait(until.elementLocated(By.xpath(this.gpuCheckBox)), 3000);
        const checkBox = await this.driver.findElement(By.xpath(this.gpuCheckBox));
        await checkBox.click();
        await this.driver.wait(until.elementLocated(By.xpath(this.selectIconForGpuT)), 3000);
        const selectIconGpt = await this.driver.findElement(By.xpath(this.selectIconForGpuT));
        await this.driver.wait(until.elementIsVisible(selectIconGpt), 3000);
        await selectIconGpt.click();
        const gpuType = await this.driver.findElement(By.xpath(this.gpuType));
        await this.driver.wait(until.elementIsVisible(gpuType), 3000);
        await gpuType.click();
        const selectIconForGpun = await this.driver.findElement(By.xpath(this.selectIconForGpuN));
        await selectIconForGpun.click();
        await this.driver.wait(until.elementLocated(By.xpath(this.numberOfGpu)), 3000);
        const numGpu = await this.driver.findElement(By.xpath(this.numberOfGpu));
        await numGpu.click();
    };

    async addSSD() {
        await this.driver.wait(until.elementLocated(By.xpath(this.ssdSelector)), 3000);
        const selectSSD = await this.driver.findElement(By.xpath(this.ssdSelector));
        await selectSSD.click();
        await this.driver.wait(until.elementLocated(By.xpath(this.ssD)), 3000);
        const ssd = await this.driver.findElement(By.xpath(this.ssD));
        await this.driver.wait(until.elementIsVisible(ssd), 3000);
        await ssd.click();
    };

    async addDatacenter() {
        await this.driver.wait(until.elementLocated(By.xpath(this.dataCenterSelector)), 3000);
        const selectDc = await this.driver.findElement(By.xpath(this.dataCenterSelector));
        await this.driver.wait(until.elementIsVisible(selectDc), 10000);
        await selectDc.click();
        await this.driver.wait(until.elementLocated(By.xpath(this.dataCenter)), 3000);
        const dc = await this.driver.findElement(By.xpath(this.dataCenter));
        await this.driver.wait(until.elementIsVisible(dc), 5000);
        await dc.click();
    };

    async addCommUsage() {
        await this.driver.wait(until.elementLocated(By.xpath(this.commitedUsageSelector)), 3000);
        const selectCu = await this.driver.findElement(By.xpath(this.commitedUsageSelector));
        await this.driver.wait(until.elementIsVisible(selectCu), 3000);
        await selectCu.click();
        await this.driver.wait(until.elementLocated(By.xpath(this.commUSage)), 3000);
        const dc = await this.driver.findElement(By.xpath(this.commUSage));
        await dc.click()
    };

    async clickAddtoEstimate(position) {
        const target = (await this.driver.findElements(By.xpath(this.addToEstimateButton)))[position];
        await target.click();
    };

    async waitEmailEstimateButton() {
        await this.driver.wait(async () => {
            const target = await this.driver.findElement(By.xpath(this.emailEstimateButton));
            return !!target
        }, 5000)
    };

    async waitEmailButtonActive() {
        const sendEmailButton = await this.driver.findElement(By.xpath(this.emailSendButton));
        await this.driver.wait(until.elementIsEnabled(sendEmailButton), 3000);

    }









}

module.exports = GoogleCalc;