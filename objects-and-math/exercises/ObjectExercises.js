let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

// Create More Objects
// Based on the two object literals provided above, create new object literals for three more animals:

let superChimpTwo = {
   name: 'Brad',
   species: 'Chimpanzee',
   mass: 11,
   age: 6
};

let dog = {
   name: 'Leroy',
   species: 'Beagle',
   mass: 14,
   age: 5
};

let segmentedMicroAnimal = {
   name: 'Almina',
   species: 'Tardigrade',
   mass: 0.0000000001,
   age: 1
};

// After you have created the other object literals, add the astronautID property to each one.
// Each astronautID should be assigned a number between 1 and 10 (including 10). 
// No crew members should have the same ID.

// superChimpOne[astronautID] = 1;
// salamander[astronautID] = 2;
// superChimpTwo[astronautID] = 3; 
// dog[astronautID] = 4; 
// segmentedMicroAnimal[astronautID] = 5;

let crew = [superChimpOne, salamander, superChimpTwo, dog, segmentedMicroAnimal];

// for (let i = 0; i < crew.length; i++) {
//    crew[i].astronautID = i + 1;
// }

// function named addAstroId takes array of objects as a parameter
function addAstroId(arrayOfObjects){
   // for loop iterate over crew array
   for (let i = 0; i < crew.length; i++) {
      // Assign unique astronautID to each object element in arrayOfObjects
      arrayOfObjects[i].astronautID = i + 1;
   };
}
// function call
addAstroId(crew);


const addAstroId = (arrayOfObjects) => {
   arrayOfObjects.forEach((obj, index) => {
      obj.astronautID = index + 1;
   });
};



console.log(segmentedMicroAnimal);

// Create an array to hold the animal objects.
let animalObjectsArray = [superChimpOne, salamander, superChimpTwo, dog, segmentedMicroAnimal];

// Add a Method
// Add a move method to each animal object. 
// Method will select a random number of steps from 0 to 10 for the animal to take. 
// The number can be 0 as well as 10.

for (let i = 0; i < animalObjectsArray.length; i++) {
   animalObjectsArray[i].move = function () {
      return Math.floor(Math.random()*11);
   };
}

console.log(segmentedMicroAnimal);

// Store the Objects
// Create a crew array to store all of the animal objects.
let crewArray = [superChimpOne, salamander, superChimpTwo, dog, segmentedMicroAnimal];

// Print out the relevant information about each animal.
for (let i = 0; i < animalObjectsArray.length; i++){
   console.log(animalObjectsArray[i]);
};

// Start an animal race!

// Part 2: Crew Reports
// Define a crewReports function to accomplish this. When passed one of the animal objects, 
// the function returns a template literal with the following string: 
// '____ is a ____. They are ____ years old and ____ kilograms. Their ID is ____.'
// Fill in the blanks with the name, species, age, mass, and ID for the selected animal.

function crewReports(animal){
   console.log(`${animal.name} is a ${animal.species}.
   \nThey are ${animal.age} years old and ${animal.mass} kilograms. 
   \nTheir ID is: ${animal.astronautID}.`);
};
console.log(crewReports(superChimpOne));

// Part 3: Crew Fitness
// Define a fitnessTest function that takes an array as a parameter.



function fitnessTest(array){

}