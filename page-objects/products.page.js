let WebText = require("../controls/web.text");

class ProductsPage {
	constructor () {
        this.userNameText = new WebText(element(by.css(".user-data .user-name")), 'user name text');
	}

	getUserName () {
		return this.userNameText.getText();
	}
}

module.exports = ProductsPage;