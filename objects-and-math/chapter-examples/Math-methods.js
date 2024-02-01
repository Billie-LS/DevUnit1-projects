// Common Math Methods

// Check Your Understanding
console.log(Math.floor(-3.87));  // 4
console.log(Math.random(-500));  //
console.log(Math.round(-3.87));  // 
console.log(Math.trunc(-3.87));  // -3

let num = Math.floor(Math.random()*10);
// .random() returns random decimal between 0 and 1, NOT including 1.
// .floor() rounds the decimal number DOWN to the closest integer value.

console.log(num); // random integer between 0 and 9 (inclusive).

let num2 = Math.round(Math.random()*10);

console.log(num2);