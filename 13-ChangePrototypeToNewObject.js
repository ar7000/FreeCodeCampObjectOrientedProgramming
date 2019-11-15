function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    numLegs: 4,
    eat: () => {console.log("Nom nom, woof woof")},
    describe: () => {console.log("My name is " + this.name + ".")}
  };