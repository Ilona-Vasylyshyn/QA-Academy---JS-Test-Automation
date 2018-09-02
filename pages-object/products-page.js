let WebText = require("../controls/web.text");

class ProductPage {
	constructor () {
        this.userNameText = new WebText(element(by.css(".user-name")), 'user name text');
	}

	getUserName () {
		return this.userNameText.getText();
	}
}

module.exports = ProductPage;