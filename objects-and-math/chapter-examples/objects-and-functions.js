// Objects and Functions

let giraffe = {
    species: "Reticulated Giraffe",
    name: "Cynthia",
    weight: 1500,
    age: 15,
    diet: "leaves"
};

// function birthday(animal) {
//     animal.age = animal.age + 1;
//     return animal;
// }

const birthday = (object) => {
    object.age = object.age + 1;
    return object;
};

console.log(giraffe.age);

birthday(giraffe);

console.log(giraffe.age);


let tortoiseOne = {
    age: 150,
    species: "Galapagos Tortoise",
    diet: ["pumpkins", "lettuce", "cabbage"]
};

let tortoiseTwo = {
    age: 150,
    species: "Galapagos Tortoise",
    diet: ["pumpkins", "lettuce", "cabbage"]
};

console.log(tortoiseOne == tortoiseTwo); // false
console.log(tortoiseOne === tortoiseTwo); // false
console.log(tortoiseOne.age === tortoiseTwo.age); // true
