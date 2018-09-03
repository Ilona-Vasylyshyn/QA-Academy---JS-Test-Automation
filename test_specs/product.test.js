const LoginPage = require('./../page-objects/login.page');
const ProductsPage = require('./../page-objects/products.page');
const ProductPage = require('./../page-objects/product.page');
const HeaderPage = require('./../page-objects/header.page');

const generatedNumber = new Date().valueOf();
const productName = `Ilona-Vasylyshyn automation ${generatedNumber}`;
const productFamily = 'Ilona_Vasylyshyn Product Family 1';

describe('Product Functionality: ', () => {
    it('Product should be created', async () => {
        const loginPage = new LoginPage();
        const headerPage = new HeaderPage();
        const productPage = new ProductPage();
        
        await loginPage.get();
        await loginPage.login(browser.params.credentials.login, browser.params.credentials.password);        

        expect (await headerPage.isHeaderVisible()).toEqual(true);

        await headerPage.goToAdministration();
        await productPage.goToCreate();
        await productPage.setProductName(productName);
        await productPage.setProductFamily(productFamily);
        await productPage.pressSave();

        expect(await productPage.hasProduct(productName)).toBe(true);
    });      
});
