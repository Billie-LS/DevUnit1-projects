let num = Number("42");
console.log("The variable num is of type", typeof num, "and has value", num);

let commaSeparatedValues = "Smith,Jane,100 Cherry Blossom Lane";
let values = commaSeparatedValues.split(',');
console.log(values);

/*
This code iterates through the elements of the names array 
using a for loop and prints each name to the console.
*/

// Declare an array 'names' with the elements: "Lena", "James", "Julio".
let names = ["Lena", "James", "Julio"];

// Use for-loop to iterate each element in array
// Initialize a variable 'i' to 0; loop as long as 'i' is less than the length of the 'names' array; increment 'i' after each iteration.
for (let i = 0; i < names.length; i++) {
    // Print the current element in the 'names' array at index 'i' to the console.
    console.log(names[i]);
}

/*
function, printNames, takes array of names as argument and 
prints each name to the console using a for-loop. It encapsulates 
the logic for printing names, enabling reuse of functionality by 
invoking function with different name arrays
*/

// Define function 'printNames' that takes array of 'names' as a parameter.
function printNames(names) {
    // Use a for loop to iterate over each element in the 'names' array.
    // Initialize a variable 'i' to 0; loop as long as 'i' is less than the length of the 'names' array; increment 'i' after each iteration.
    for (let i = 0; i < names.length; i++) {
        // Print the current element in the 'names' array at index 'i' to the console.
        console.log(names[i]);
    }
}
