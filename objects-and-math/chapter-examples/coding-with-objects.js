// Booleans and Objects

let giraffe = {
    species: "Reticulated Giraffe",
    name: "Cynthia",
    weight: 1500,
    age: 15,
    diet: "leaves"
};

for (key in giraffe) {
    console.log(key + ", " + giraffe[key]);
}