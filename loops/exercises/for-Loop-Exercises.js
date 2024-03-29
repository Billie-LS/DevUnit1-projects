/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */
// a. Print the numbers 0 - 20, one number per line.
for (i=0; i<21; i++) {
  console.log(i);
}

// b. Print only the ODD values from 3 - 29, one number per line.
for (i=0; i<30; i++) {
  if (i%2 !== 0 && i> 2) {
    console.log(i);
  } 
}

// b. Print only the ODD values from 3 - 29, one number per line.
for (let i = 3; i <= 29; i += 2) {
  console.log(i);
}

// c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
for (let i = 12; i > -15; i -= 2) {
  console.log(i);
}

// d. Challenge - Print the numbers 50 - 20 in descending order, 
// but only if the numbers are multiples of 3. 
// (Your code should work even if you replace 50 or 20 with other numbers).
for (let i = 50; i > 20 ; i -= 1) {
  if (i%3 === 0){
    console.log(i);
  }
}


for (let i = 48; i >= 20; i -= 3) {
  console.log(i);
}

/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].
Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 

// a. Print each element of the array to a new line.
// for (let i = 0; i < arr.length; i++) {
// console.log(arr[i]);
// }

let arrStuff = [1, 5, 'LC101', 'blue', 42];

for (let i = 0; i < arrStuff.length; i++) {
  console.log(arrStuff[i]);
}

// b. Print each character of the string - in reverse order - to a new line.
let strLaunchCode = 'LaunchCode';  // declare variable and initialize to value "LaunchCode"
let reversed = "";  // accumulator variable

for (let i = 0; i<strLaunchCode.length; i++ ){
  // concatenate current character to the beginning of the reversed string
  reversed = strLaunchCode[i]+reversed
}
console.log(reversed);

/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

// Original array
let arr = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
let arrEven = []; // Array to store even numbers
let arrOdd = [];  // Array to store odd numbers

// Loop through the elements of array
for (let i = 0; i < arr.length; i++) {
  // if the current element is even
  if (arr[i] % 2 === 0) {
    // even, push to even array
    arrEven.push(arr[i]);
  } else {
    // odd, push to odd array
    arrOdd.push(arr[i]);
  }
}

// Displaying the even and odd arrays
console.log("Even array", arrEven);
console.log("Odd array", arrOdd);


// Original array
let arr1 = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];

// Using filter to generate array of the even numbers
let arrEven1 = arr.filter(num => num % 2 === 0);

// Using filter to generate array of the odd numbers
let arrOdd1 = arr.filter(num => num % 2 !== 0);

// Displaying the even and odd arrays
console.log("Even array", arrEven1);
console.log("Odd array", arrOdd1);