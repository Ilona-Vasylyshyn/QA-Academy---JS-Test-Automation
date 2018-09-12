const LoginPage = require('./../page-objects/login.page');
const ProductsPage = require('./../page-objects/products.page');
const ProductPage = require('./../page-objects/product.page');
const HeaderPage = require('./../page-objects/header.page');

const generatedNumber = new Date().valueOf();
const productName = `Ilona-Vasylyshyn automation ${generatedNumber}`;
const productFamily = 'Ilona_Vasylyshyn Product Family 1';

describe('Product Functionality: ', () => {
    beforeEach(async() => {
         await browser.restart();
    });

    it('Product should be created', async () => {
        const loginPage = new LoginPage();
        const headerPage = new HeaderPage();
        const productPage = new ProductPage();
        
        await allure.createStep("Go to EDS web-system", async () => await loginPage.get())();
        await allure.createStep(`Login to web-system with email "${browser.params.credentials.login}" and password "${browser.params.credentials.password}"`,
            async () => {
                await loginPage.login(browser.params.credentials.login, browser.params.credentials.password);        

                expect (await headerPage.isHeaderVisible()).toEqual(true);
            }
        )();
        await allure.createStep("Go to Administration page", async () => await headerPage.goToAdministration())();
        await allure.createStep("Press create product", async () => await productPage.goToCreate())();
        await allure.createStep(`Enter product fields:  productName: "${productName}" productFamily: "${productFamily}"`, 
            async () => {
                await productPage.setProductName(productName);
                await productPage.setProductFamily(productFamily);
            }
        )();
        await allure.createStep("Press save product", 
            async () => {
                await productPage.pressSave();
                expect(await productPage.hasProduct(productName)).toBe(true);
            }
        )();
    });      
});
