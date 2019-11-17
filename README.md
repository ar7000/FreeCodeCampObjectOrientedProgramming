Working through Object Oriented Programming via FreeCodeCamp resources and copying passed code to Git repo as I go through each task. Documenting below anything new I learn.

- Learned how to create a method on an object. This is a function that is stored within a key on the object and can be called in relation to the object. Example:

```
const obj = {
    name: "Ashley Robinson",
    age: 30,
    ageInTenYears: () => {return obj.name + " will be " + (obj.age + 10) + " in 10 years."}
}

obj.ageInTenYears(); //Returns "Ashley Robinson will be 40 in 10 years."
```

- Reminded how to create a constructor function as covered in previous module. Is a function that creates and object with parameters as defined using the 'this.' keyword. Example:

```
function Band() {
    this.name = "Motley Crue";
    this.singer = "Vince";
    this.guitarist = "Mick";
    this.bassist = "Nikki";
    this.drummer = "Tommy";
    this.albums = 9;
    this.tours = 33;
    this.membersDied = 1;
    this.membersStillDead = 0
};
```

    - Can be used to create a new object stored within a variable:
    ```
    let motleyCrue = new Band;
    ```

    - Can also pass arguments to be stored as values of keys:
    ```
    function Child(name){
        this.name = name;
        this.mother = "Ria";
        this.father = "Ash";
    }

    let child1 = new Child("Nancy");
    ```

- Learned difference between own properties and prototype properties of an object:
    - Own properties are defined on an object itself:
    ```
    function Dog(name) {
        this.name = name; //Own property
    }
    ```
    - Prototype properties are defined outside of the object:

    ```
    function Dog(name) {
        this.name = name;
    }

    Dog.prototype.numLegs = 4;

    let beagle = new Dog("Snoopy");
    ```

    Can also be defined as an object so several properties and methods can be added at once, but constructor must be defined on prototype otherwise original constructor will be overwritten:

    ```
    function Dog(name) {
        this.name = name;
    }

    Dog.prototype = {
        constructor: Dog, //Without this property duck.constructor will be equal to Object.
        numLegs: 4,
        eat: function () {
            console.log("nom nom nom");
        },
        describe: function () {
            console.log("My name is " + this.name);
        }
    };  
    ```

- Gained understanding of prototype chain:
    - All objects within JS have a prototype, which is itself an object. Prototype chain refers to hierarchy of prototypes and subtypes. Example:
    ```
    function Human(name){
        this.name = name;
        this.species = "human";
    }

    let ash = new Human("Ash");

    Human.prototype.isPrototypeOf(ash); //Equal to true

    Object.prototype.isPrototypeOf(Human.prototype); //Equal to true
    
    ```
    In the above: ash is the subtype of Human, Human is the supertype of ash, Object is the supertype of both (and all objects in JS).

- Learned how to use inheritance in order to avoid repeating self. Done by creating a supertype and passing properties down to prototype of children. Example:

```
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

Dog.prototype = Object.create(Animal.prototype); //Determines that Dog is child of Animal.

let beagle = new Dog();
beagle.eat(); //Logs "nom nom nom" to console.
```
    - Will by default give any instance of Dog the constructor property of "Animal". Can manually reset this:
    ```
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

    let beagle = new Dog();
    
    Dog.prototype.constructor = Dog;
    
    beagle.constructor === Dog; //Returns true
    ```