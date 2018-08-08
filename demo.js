class Vehicle {
	constructor(carModel, carYear, maxSpeed) {
		this.model = carModel;
		this.year = carYear;
		this.maxSpeed = maxSpeed;
	}
	
	displayInfo() {
		console.log(`Name: ${this.model};
		Year: ${this.year};
		Max Speed: ${this.maxSpeed};
		Type ${this.type};`);
	}
}
module.exports.Vehicle = Vehicle;

class Car extends Vehicle {
	constructor(carModel, carYear, maxSpeed) {
		super(carModel, carYear, maxSpeed);
		this.type = "car";
	}
	
	transportPeople() {
		console.log(`I am starting transporting passengers`);
	}
	
	static colorRoof() {
		console.log('The method colorRoof has been called');
	}
}
module.exports.Car = Car;

class Truck extends Vehicle {
	constructor(carModel, carYear, maxSpeed) {
		super(carModel, carYear, maxSpeed);
		this.type = "truck";
	}
	
	transportContainer() {
		console.log('I am starting transporting heavy container ');
	}
}
module.exports.Truck = Truck;