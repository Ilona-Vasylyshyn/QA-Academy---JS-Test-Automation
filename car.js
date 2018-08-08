const Vehicle = require('./vehicle');

class Car extends Vehicle {
	constructor(carModel, carYear, maxSpeed) {
		super(carModel, carYear, maxSpeed);
		this.type = "car";
	}
	
	transportPeople() {
		console.log(`I am starting transporting passengers`);
	}
	
	displayInfo() {
		console.log(`
		Overridden father's class
		Name: ${this.model};
		Year: ${this.year};
		Max Speed: ${this.maxSpeed};
		Type ${this.type};`);
	}
	static colorRoof() {
		console.log('The method colorRoof has been called');
	}
}
module.exports = Car;