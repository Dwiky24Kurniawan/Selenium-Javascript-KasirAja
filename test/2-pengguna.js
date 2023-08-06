const { expect, assert } = require('chai');
const {Builder, Browser, By, Key, until, thread} = require('selenium-webdriver');

describe('Test Suite - Pengguna - KasirAja', function (){
    
    let driver;

    beforeEach('Login first', async function(){
        driver = await new Builder().forBrowser('chrome').build();

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

    it('TC001 - Positive - Add user cashier with valid input', async function(){
        let url = await driver.getCurrentUrl();
        let title = await driver.getTitle();
        expect(url).to.equal('https://kasirdemo.belajarqa.com/dashboard');
        expect(title).to.equal('kasirAja');

        await driver.findElement(By.css('a:nth-child(8) .css-1mqa38q')).click();
        await driver.wait(until.elementLocated(By.className('chakra-button css-1piskbq'))).click();
        
        await driver.findElement(By.id('nama')).sendKeys('kasir gue nih');
        await driver.findElement(By.id('email')).sendKeys('kasirguenih@dwiky.com');
        await driver.findElement(By.id('password')).sendKeys('kasirguenih');
        await driver.findElement(By.className('chakra-button css-l5lnz6')).click();

        let successMsg = await driver.wait(until.elementLocated(By.xpath('//*[@id="1"]/div/div[1]'))).getText();
        expect(successMsg).to.equal('success');
        let itemAddedMsg = await driver.wait(until.elementLocated(By.xpath('//*[@id="1"]/div/div[2]'))).getText();
        expect(itemAddedMsg).to.equal('item ditambahkan');
    });

    it('TC002 - Negative - Add user cashier without input name', async function(){
        let url = await driver.getCurrentUrl();
        let title = await driver.getTitle();
        expect(url).to.equal('https://kasirdemo.belajarqa.com/dashboard');
        expect(title).to.equal('kasirAja');

        await driver.findElement(By.css('a:nth-child(8) .css-1mqa38q')).click();
        await driver.wait(until.elementLocated(By.className('chakra-button css-1piskbq'))).click();
        
        await driver.findElement(By.id('email')).sendKeys('kasirguenih@dwiky.com');
        await driver.findElement(By.id('password')).sendKeys('kasirguenih');
        await driver.findElement(By.className('chakra-button css-l5lnz6')).click();

        let errorMsg = await driver.wait(until.elementLocated(By.className('chakra-alert css-qwanz3'))).getText();
        expect(errorMsg).to.equal('"name" is not allowed to be empty');
    });

    it('TC003 - Negative - Add user cashier without input email', async function(){
        let url = await driver.getCurrentUrl();
        let title = await driver.getTitle();
        expect(url).to.equal('https://kasirdemo.belajarqa.com/dashboard');
        expect(title).to.equal('kasirAja');

        await driver.findElement(By.css('a:nth-child(8) .css-1mqa38q')).click();
        await driver.wait(until.elementLocated(By.className('chakra-button css-1piskbq'))).click();
        
        await driver.findElement(By.id('nama')).sendKeys('kasir gue nih');
        await driver.findElement(By.id('password')).sendKeys('kasirguenih');
        await driver.findElement(By.className('chakra-button css-l5lnz6')).click();

        let errorMsg = await driver.wait(until.elementLocated(By.className('chakra-alert css-qwanz3'))).getText();
        expect(errorMsg).to.equal('"email" is not allowed to be empty');
    });

    it('TC004 - Negative - Add user cashier without input password', async function(){
        let url = await driver.getCurrentUrl();
        let title = await driver.getTitle();
        expect(url).to.equal('https://kasirdemo.belajarqa.com/dashboard');
        expect(title).to.equal('kasirAja');

        await driver.findElement(By.css('a:nth-child(8) .css-1mqa38q')).click();
        await driver.wait(until.elementLocated(By.className('chakra-button css-1piskbq'))).click();
        
        await driver.findElement(By.id('nama')).sendKeys('kasir gue nih');
        await driver.findElement(By.id('email')).sendKeys('kasirguenih@dwiky.com');
        await driver.findElement(By.className('chakra-button css-l5lnz6')).click();

        let errorMsg = await driver.wait(until.elementLocated(By.className('chakra-alert css-qwanz3'))).getText();
        expect(errorMsg).to.equal('"password" is not allowed to be empty');
    });

    it('TC005 - Negative - Add user cashier with invalid email format', async function(){
        let url = await driver.getCurrentUrl();
        let title = await driver.getTitle();
        expect(url).to.equal('https://kasirdemo.belajarqa.com/dashboard');
        expect(title).to.equal('kasirAja');

        await driver.findElement(By.css('a:nth-child(8) .css-1mqa38q')).click();
        await driver.wait(until.elementLocated(By.className('chakra-button css-1piskbq'))).click();
        
        await driver.findElement(By.id('nama')).sendKeys('kasir gue nih');
        await driver.findElement(By.id('email')).sendKeys('kasirguenih@dwiky');
        await driver.findElement(By.id('password')).sendKeys('kasirguenih');
        await driver.findElement(By.className('chakra-button css-l5lnz6')).click();

        let errorMsg = await driver.wait(until.elementLocated(By.className('chakra-alert css-qwanz3'))).getText();
        expect(errorMsg).to.equal('"email" must be a valid email');
    });

    it('TC006 - Negative - Add user cashier with invalid email format', async function(){
        let url = await driver.getCurrentUrl();
        let title = await driver.getTitle();
        expect(url).to.equal('https://kasirdemo.belajarqa.com/dashboard');
        expect(title).to.equal('kasirAja');

        await driver.findElement(By.css('a:nth-child(8) .css-1mqa38q')).click();

        let errorMsg = await driver.wait(until.elementLocated(By.className('chakra-alert css-qwanz3'))).getText();
        expect(errorMsg).to.equal('"name" is not allowed to be empty');
    });

    it('TC007 - Positive - Edit user cashier with valid input', async function(){
        let url = await driver.getCurrentUrl();
        let title = await driver.getTitle();
        expect(url).to.equal('https://kasirdemo.belajarqa.com/dashboard');
        expect(title).to.equal('kasirAja');

        await driver.findElement(By.css('a:nth-child(8) .css-1mqa38q')).click();
        await driver.wait(until.elementLocated(By.xpath('//*[@id="menu-button-19"]'))).click();
        await driver.findElement(By.id('menu-list-11-menuitem-8')).click();
        await driver.findElement(By.id('nama')).sendKeys('kasir gue yaa');
        await driver.findElement(By.id('email')).sendKeys('kasirgueyaa@dwiky.com');
        await driver.findElement(By.id('password')).sendKeys('kasirgueyaa');
        await driver.findElement(By.className('chakra-button css-l5lnz6')).click();

        let successMsg = await driver.wait(until.elementLocated(By.xpath('//*[@id="1"]/div/div[1]'))).getText();
        expect(successMsg).to.equal('success');
        let itemAddedMsg = await driver.wait(until.elementLocated(By.xpath('//*[@id="1"]/div/div[2]'))).getText();
        expect(itemAddedMsg).to.equal('item diubah');

        let errorMsg = await driver.wait(until.elementLocated(By.className('chakra-alert css-qwanz3'))).getText();
        expect(errorMsg).to.equal('"name" is not allowed to be empty');
    });

    afterEach(async () => driver.quit());

})