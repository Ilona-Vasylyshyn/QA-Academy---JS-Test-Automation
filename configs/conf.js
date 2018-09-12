const AllureReporter = require('jasmine-allure-reporter');
exports.config = {
	SELENIUM_PROMISE_MANAGER: 0,
	directConnect: false,
	framework: 'jasmine',
	allScriptsTimeout: 45000,
	getPageTimeout: 30000,
	specs: ['../test_specs/*.js'],
	capabilities: {
		browserName: "firefox"
	},
	seleniumAddress: 'http://localhost:4444/wd/hub',
	params: {
		user: {
			firstName: "Ilona",
			lastName: "Vasylyshyn"
		},
		credentials: {
			login: "ilona.vasylyshyn@gmail.com",
			password: "pw(+Goru1@h"
		},
		siteUrl: "http://eds_university.eleks.com"
	},
	onPrepare: function(){
		jasmine.getEnv().addReporter(new AllureReporter({
			resultsDir: 'allure-results'
		}));

		jasmine.getEnv().afterEach(async () => {
			let screenshotFile = await browser.takeScreenshot();

			await allure.createAttachment("Screenshot", () => {
				return new Buffer(screenshotFile, "base64");
			}, 'image/png')();
		});
		// jasmine.getEnv().addReporter(new function(){
		// 	this.specDone = async (result) => {

		// 	}
		// });
	}
};