function compareNumbers(a, b) {
	return a === 50 || b === 50 || (a + b) === 50;
}

describe('Compare Numbers:', function() {
	it ('compare numbers when first number is 50', function () {
		expect(compareNumbers(50, 10)).toBe(true);
	});

	it ('compare numbers when second number is 50', function () {
		expect(compareNumbers(10, 50)).toBe(true);
	});

	it ('compare numbers when the sum of two numbers is 50', function () {
		expect(compareNumbers(10, 40)).toBe(true);
	});

	it ('compare invalid numbers', function () {
		expect(compareNumbers(11, 40)).toBe(false);
	});
});