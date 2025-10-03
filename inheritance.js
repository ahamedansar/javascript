//one class can inherits properties and method from other class (by using 'extends' key word)

//base class
class Animal {
    constructor(name) {
        this.name = name;        //initializtion 
    }

    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

// derived class inherits animal;

class Dog extends Animal {
    constructor(name, breed) {
        super(name);//calls the parent constructor
        this.breed = breed;
    }
    //override speak method
    speak() {
        console.log(`${this.name}-${this.breed} barks`);

    }
}
const dog = new Dog("Rex","German shepherd");
dog.speak()