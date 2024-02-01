let giraffe = {
    species: "Reticulated Giraffe",
    name: "Cynthia",
    weight: 1500,
    age: 15,
    diet: "leaves"
};

// .random = greater than or equal to 0 and less than 1
// .floor = always rounds down and returns the largest integer less than or equal to a given number
// .round = returns the value of a number rounded to the nearest integer.

let num1 = Math.floor(Math.random()*10);

console.log(num1); // 0 - 9

let num2 = Math.round(Math.random()*10);

console.log(num2);