function addTwoIntegers (a, b) {
	return parseInt(a, 10) + parseInt(b, 10);
}

describe('Add two integers:', function() {
	it ('correct adding integers', function() {
		expect(addTwoIntegers(10, 20)).toBe(30);
	});

	it ('incorrect adding integer and string', function() {
		expect(addTwoIntegers(10, 'a')).toBeNaN();
	});

	it ('correct adding integer and number in string', function() {
		expect(addTwoIntegers(10, '11')).toBe(21);
	});

	it ('correct adding integer and float', function() {
		expect(addTwoIntegers(10, 10.1)).toBe(20);
	});

	it ('correct adding positive and negative integers', function() {
		expect(addTwoIntegers(10, -5)).toBe(5);
	});
});