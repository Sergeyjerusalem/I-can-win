const DriverHolder = require('../../src/app/driverHolder/driverholder');
const PasteBin = require('../../src/app/pages/workingPages/pasteBin');
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
        await pasteBin.getPage('');
        await pasteBin.waitTextArea();
        await pasteBin.sendPaste();
        await pasteBin.pasteExpirationOption();
        await pasteBin.waitPastName();
        await pasteBin.sendKeys('pastName', 'helloweb');
        await driver.sleep('3000')

    });

});
