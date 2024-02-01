function randomSelection(arr){
  let index = Math.floor(Math.random()*arr.length);
  return arr[index];
}

let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];

let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];

for (i=0; i < 8; i++){
  console.log(randomSelection(happiness));
}

console.log('TESTING BELOW');
//Experiment with the code above. Try to:
//a) Print 3 random selections from each array.
for (i=0; i < 3; i++){
  console.log(randomSelection(happiness));
}

for (i=0; i < 3; i++){
  console.log(randomSelection(words));
}
//b) Have the code randomly pick one array, and then print 2 random items from it.
// Randomly pick one array
console.log('TESTING BELOW');

// let selectedArray = randomSelection(ArrOfArrays);
let selectedArray = randomSelection([happiness, words]);

// let selectedArray = function randomSelection(ArrOfArrays){
//   let index = Math.floor(Math.random()*ArrOfArrays.length);  // returns an integer 0 to (length of ArrOfArrays -1) 
//   return ArrOfArrays[index];  // returns one of the ARRAYS
// }

// Print 2 random selections from the selected array
for (let i = 0; i < 2; i++) {
  console.log(randomSelection(selectedArray));
}

//c) Create a new array, then fill it with one random item from words and happiness. Print the new array.
console.log('TESTING  FINAL)');

let newArr = [];

for (let i = 0; i < 1; i++) {
  let element1 = randomSelection(happiness); // gets one element from array happiness
  let element2 = randomSelection(words);  // gets one element from array words
  // newArr = (element1 +', '+ element2).split(',');
  newArr = (element1 +' '+ element2).split(' ');
  console.log(newArr);
  // console.log(randomSelection(selectedArray));
}
