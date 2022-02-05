const DriverHolder = require('../../src/app/driverHolder/driverholder');
const CloudGoogle = require('../../src/app/pages/workingPages/cloudGoogle');
const GoogleCalc = require('../../src/app/pages/workingPages/googleCalc');
const YopMail = require('../../src/app/pages/workingPages/yopMail');
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
        let cloudGoogle = new CloudGoogle(driver);
        let googleCalc = new GoogleCalc(driver);
        let yopMail = new YopMail(driver);
        await cloudGoogle.getPage('');
        await cloudGoogle.waitLabel('');
        await cloudGoogle.click('searchLabel');
        await cloudGoogle.waitSearchInput();
        await cloudGoogle.sendKeys('searchInput', 'Google Cloud Platform Pricing Calculator');
        await cloudGoogle.click('searchLabel');
        await cloudGoogle.waitSearchTitle();
        await cloudGoogle.selectSearchTitle(0);
        await googleCalc.SwitchtoFrame();
        await googleCalc.waitNumberOfInstance();
        await googleCalc.calcSendKeys('numberOfInstance', '4');
        await googleCalc.changeOperatingSys();
        await googleCalc.changeClass();
        await googleCalc.changeSeries();
        await googleCalc.changeType();
        await googleCalc.space();
        await googleCalc.addGPU();
        await googleCalc.addSSD();
        await googleCalc.addDatacenter();
        await googleCalc.addCommUsage();
        await googleCalc.clickAddtoEstimate(0);
        let text1 = await googleCalc.getText('totalCostggl')
        await googleCalc.waitEmailEstimateButton();
        await googleCalc.click('emailEstimateButton')
        await googleCalc.windowOri();
        await googleCalc.openNewPage();
        await googleCalc.switchtoPage();
        await yopMail.waitMailTitle();
        await yopMail.sendKeys('mailInput', 'lolyopa@mail.ru');
        await yopMail.waitAlias();
        await yopMail.getText('alias');
        await googleCalc.returnToPage();
        await googleCalc.SwitchtoFrame();
        await yopMail.sendMail('emailInput');
        await googleCalc.waitEmailButtonActive();
        await googleCalc.click('emailSendButton');
        await googleCalc.switchtoPage();
        await yopMail.waitRefresh();
        await yopMail.click('refreshButton');
        await yopMail.waitTotalCost();
        let text2 = await yopMail.getText('totalCostym');
        await yopMail.deleteMail();
        expect(text1).toContain(text2);
    });

});
