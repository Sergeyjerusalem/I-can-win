const DriverHolder = require('../../src/app/driverHolder/driverholder');
const PasteBin = require('../../src/app/pages/workingPages/pasteBin');
const ResultPage = require('../../src/app/pages/workingPages/resultPage');
const dh = new DriverHolder;



describe("A suite is just a function", function () {
    let driver = null;

    beforeAll(async function () {
        driver = await dh.getDriver();

        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000000
    })

    beforeEach(async function () {

        await driver.manage().window().maximize();

    });

    afterEach(async function () {
        await dh.clear();
    });

    afterAll(async function () {
        await driver.quit();
    });

    it("1st test suite", async function () {
        let pasteBin = new PasteBin(driver);
        let resultPage = new ResultPage(driver);
        await pasteBin.getPage('');
        await pasteBin.waitTextArea();
        await pasteBin.sendPaste();
        await pasteBin.pasteHiglightOption();
        await pasteBin.pasteExpirationOption();
        await pasteBin.waitPastName();
        await pasteBin.sendKeys('pastName', 'how to gain dominance among developers');
        await pasteBin.click('submitButton');
        await resultPage.waitPage();
        let code = await resultPage.getText('code')
        expect(pasteBin.message).toContain(code);
        let title = await resultPage.getText('title');
        expect(title).toContain('how to gain dominance among developers');
        let type = await resultPage.getText('bashIndicator');
        expect(type).toContain('Bash');

    });

});
