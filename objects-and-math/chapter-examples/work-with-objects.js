// Bracket Syntax
// access a property with bracket syntax: object["key"].

// Dot Notation
// access a property with dot notation syntax: object.key. (Note key no longer surrounded by quotes).

let tortoiseOne = {
    species: "Galapagos Tortoise",
    name: "Pete",
    weight: 919,
    age: 85,
    diet: ["pumpkins", "lettuce", "cabbage"]
};

console.log(tortoiseOne["name"]);  // "Pete"
console.log(tortoiseOne.name);  // "Pete"

// Modifying Properties
// Objects are mutable data structures. 
// When change the value of a property, original object is modified (i.e. NO copy is made).

tortoiseOne = {
    species: "Galapagos Tortoise",
    name: "Pete",
    weight: 919,
    age: 85,
    diet: ["pumpkins", "lettuce", "cabbage"]
};

console.log(tortoiseOne.weight); // 919

newWeight = tortoiseOne.weight + 10; // 919 + 10 = 929

tortoiseOne["weight"] = newWeight;  // changing the value for the indicated key to 929

console.log(tortoiseOne["weight"]); // 929

// Add New Key/Value Pairs
// Once object declared and initialized, add new properties using bracket syntax:
//  syntax : objectName["new-key"] = propertyValue;

let tortoiseTwo = {
    species: "Galapagos Tortoise",
    name: "Pete",
    weight: 919
};

console.log(tortoiseTwo); // { species: 'Galapagos Tortoise', name: 'Pete', weight: 919 }

tortoiseTwo["age"] = 120; // add K-V pair age : 120
tortoiseTwo["speed"] = 'Faster than the hare.' // add K-V pair speed : 'Faster than the hare.'

console.log(tortoiseTwo);
// {
//     species: 'Galapagos Tortoise',
//     name: 'Pete',
//     weight: 919,
//     age: 120,
//     speed: 'Faster than the hare.'
//   }
console.log(tortoiseTwo.age); // 120

// Check Your Understanding
let giraffe = {
    species: "Reticulated Giraffe",
    name: "Cynthia",
    weight: 1500,
    age: 15,
    diet: "leaves"
};
console.log(giraffe);
// giraffe['birthday'] = function () {
//     this.age = this.age + 1;
//     return this.age;
// }
giraffe.birthday = () => {
    giraffe.age = giraffe.age + 1;
    return giraffe.age;
}

// giraffe.birthday = () => {
//     this.age = this.age + 1;
//     return this.age;
// }

console.log(giraffe);
giraffe.birthday()
console.log(giraffe);

/*
sign: function() {
    return this.name + " is a " + this.species;
}
*/