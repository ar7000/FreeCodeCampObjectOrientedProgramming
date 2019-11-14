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