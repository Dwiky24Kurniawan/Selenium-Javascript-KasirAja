const { expect, assert } = require('chai');
const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

describe('Test Suite - Login - KasirAja', function (){
    
    let driver;

    beforeEach(async function(){
        driver = await new Builder().forBrowser('chrome').build();
    });
    
    it('TC001 - Positive - Login with valid credentials', async function(){
        await driver.get('https://kasirdemo.belajarqa.com')
        let url = await driver.getCurrentUrl();
        let title = await driver.getTitle();
        // assert.equal(url, 'https://kasirdemo.belajarqa.com/login');
        expect(url).to.equal('https://kasirdemo.belajarqa.com/login');
        expect(title).to.equal('kasirAja');

        await driver.findElement(By.id('email')).sendKeys('toko@dwiky.com');
        await driver.findElement(By.id('password')).sendKeys('toko24dwiky');
        await driver.findElement(By.className('chakra-button css-1n8i4of')).click();

        let heading = await driver.wait(until.elementLocated(By.className('chakra-heading css-1wswht5'))).getText();
        expect(heading).to.equal('kasirAja');
    });

    it('TC002 - Negative - Login with invalid credentials', async function(){
        await driver.get('https://kasirdemo.belajarqa.com')
        let url = await driver.getCurrentUrl();
        let title = await driver.getTitle();
        expect(url).to.equal('https://kasirdemo.belajarqa.com/login');
        expect(title).to.equal('kasirAja');

        await driver.findElement(By.id('email')).sendKeys('tokonya@dwiky.com');
        await driver.findElement(By.id('password')).sendKeys('tokodwiky');
        await driver.findElement(By.className('chakra-button css-1n8i4of')).click();

        let errorMsg = await driver.wait(until.elementLocated(By.className('chakra-alert css-qwanz3'))).getText();
        expect(errorMsg).to.equal('Kredensial yang Anda berikan salah');
    });

    it('TC003 - Negative - Login without input email', async function(){
        await driver.get('https://kasirdemo.belajarqa.com')
        let url = await driver.getCurrentUrl();
        let title = await driver.getTitle();
        expect(url).to.equal('https://kasirdemo.belajarqa.com/login');
        expect(title).to.equal('kasirAja');

        await driver.findElement(By.id('password')).sendKeys('toko24dwiky');
        await driver.findElement(By.className('chakra-button css-1n8i4of')).click();

        let errorMsg = await driver.wait(until.elementLocated(By.className('chakra-alert css-qwanz3'))).getText();
        expect(errorMsg).to.equal('"email" is not allowed to be empty');
    });

    it('TC004 - Negative - Login without input password', async function(){
        await driver.get('https://kasirdemo.belajarqa.com')
        let url = await driver.getCurrentUrl();
        let title = await driver.getTitle();
        expect(url).to.equal('https://kasirdemo.belajarqa.com/login');
        expect(title).to.equal('kasirAja');

        await driver.findElement(By.id('email')).sendKeys('toko@dwiky.com');
        await driver.findElement(By.className('chakra-button css-1n8i4of')).click();

        let errorMsg = await driver.wait(until.elementLocated(By.className('chakra-alert css-qwanz3'))).getText();
        expect(errorMsg).to.equal('"password" is not allowed to be empty');
    });

    it('TC005 - Negative - Login with invalid email format', async function(){
        await driver.get('https://kasirdemo.belajarqa.com')
        let url = await driver.getCurrentUrl();
        let title = await driver.getTitle();
        expect(url).to.equal('https://kasirdemo.belajarqa.com/login');
        expect(title).to.equal('kasirAja');

        await driver.findElement(By.id('email')).sendKeys('toko@dwiky');
        await driver.findElement(By.id('password')).sendKeys('toko24dwiky');
        await driver.findElement(By.className('chakra-button css-1n8i4of')).click();

        let errorMsg = await driver.wait(until.elementLocated(By.className('chakra-alert css-qwanz3'))).getText();
        expect(errorMsg).to.equal('"email" must be a valid email');
    });

    it('TC005 - Negative - Login without any input', async function(){
        await driver.get('https://kasirdemo.belajarqa.com')
        let url = await driver.getCurrentUrl();
        let title = await driver.getTitle();
        expect(url).to.equal('https://kasirdemo.belajarqa.com/login');
        expect(title).to.equal('kasirAja');

        await driver.findElement(By.className('chakra-button css-1n8i4of')).click();

        let errorMsg = await driver.wait(until.elementLocated(By.className('chakra-alert css-qwanz3'))).getText();
        expect(errorMsg).to.equal('"email" is not allowed to be empty');
    });

    afterEach(async () => driver.quit());

})