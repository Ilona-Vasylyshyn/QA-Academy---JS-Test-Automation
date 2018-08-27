function addTwoIntegers (a, b) {
	return a + b;
}

describe('Add two integers', function() {
	it ('correct adding integers', function(){
		expect(addTwoIntegers(10, 20)).toBe(30);
	});
});