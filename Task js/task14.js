// Base class
class Car {
    constructor(brand) {
        this.brand = brand;  // initialization
    }

    horn() {
        console.log(`${this.brand} goes paam paam 🚗`);
    }
}

// Derived class inherits Car
class SportsCar extends Car {
    constructor(brand, model) {
        super(brand); // call parent constructor
        this.model = model;
    }

    // override horn method
    horn() {
        console.log(`${this.brand} ${this.model} goes VROOOOM paam paam 🏎️`);
    }
}

// Create object
const myCar = new SportsCar("Ferrari", "488 GTB");
myCar.horn();   // Ferrari 488 GTB goes VROOOOM paam paam 🏎️
