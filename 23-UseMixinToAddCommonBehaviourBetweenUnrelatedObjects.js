let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};

let glideMixin = (obj) => {
    obj.glide = () => {
        console.log("Glide along, brother")
    }
}

glideMixin(bird);
glideMixin(boat);