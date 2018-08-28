exports.config = {
	framework: 'jasmine',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['spec.js'],
	capabilities: {
		browserName: "firefox"
	},
	onPrepare: function() {
    	console.log('Test execution has started');
  	},
	params: {
		calculator: {
			a: 1,
			b: 2
		}
	}
};