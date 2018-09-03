let WebText = require("../controls/web.text");
let WebTextInput = require("../controls/web.text-input");
let WebDropdown = require("../controls/web.dropdown");

let EC = protractor.ExpectedConditions;

class ProductPage {
	constructor () {
        this.newProductBtn = new WebText(element(by.xpath('//*[text()="Add New Product"]')), 'add new product');
		this.productNameTextInput = new WebTextInput(element(by.id('product-name')), 'product name input');
		this.productFamilyDropdown = new WebDropdown(element(by.css('.product-family-list .dropdown')), 'product family dropdown');
		this.saveBtn = new WebDropdown(element(by.id('saveProductAdd')), 'product save button');
	}

	async goToCreate () {
		await browser.waitForAngularEnabled(false);
		const productBtnISClickable = EC.elementToBeClickable(this.newProductBtn.getBaseControlWebElement());

		await browser.wait(productBtnISClickable,  5 * 1000);
		await this.newProductBtn.click();
		await browser.waitForAngularEnabled(true);
	}

	async setProductName (name) {
		await browser.waitForAngularEnabled(false);
		await this.productNameTextInput.sendKeys(name);
		await browser.waitForAngularEnabled(true);
	}

	async setProductFamily (name) {
		await browser.waitForAngularEnabled(false);
		const optionElem = element(by.xpath(`//*[@class="product-family-list"]//li//span[contains(., "${name}")]`));

		await this.productFamilyDropdown.selectOptionByElement(optionElem);
		await browser.waitForAngularEnabled(true);
	}

	async setDescription (text) {
		await browser.waitForAngularEnabled(false);
		await browser.switchTo().frame(element(by.xpath('//label[text()="Description"]/following-sibling::textarea-editor//iframe')));
		const textareaDescription = new WebTextInput(element(by.css('body p')), 'description body');

		await textareaDescription.sendKeys(text);
		await browser.switchTo().defaultContent();
		await browser.waitForAngularEnabled(true);
	}

	async pressSave () {
		await browser.waitForAngularEnabled(false);
		await this.saveBtn.click();
		await browser.sleep(3000);
		await browser.waitForAngularEnabled(true);
	}

	async hasProduct (name) {
		await browser.waitForAngularEnabled(false);
		const elem = element(by.xpath(`//div[@class='section__left']//li[contains(@class,'preview-list__item')]/a[text()="${name}"]`));
		const elemIsExist = EC.presenceOf(elem);

		await browser.wait(elemIsExist,  5 * 1000);
		const rs = elem.isPresent();

		await browser.waitForAngularEnabled(true);

		return rs;
	}
}

module.exports = ProductPage;