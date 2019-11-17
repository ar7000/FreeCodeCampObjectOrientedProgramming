function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

function Dog(name) {
    this.name = name;
}

Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat();