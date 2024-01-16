const input = require('readline-sync');
const prompt = require('prompt-sync')({ sigint: true });

let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
strV = str.slice(3) + 'Lau'; 
console.log(str);  // nchCodeLau

// strV = str.slice(3).concat('Lau');
// console.log(str);    // nchCodeLau

// strV = str.slice(3);  // nchCode
// strV = str.replace('nchCode', 'nchCodeLau');
// console.log(str); // nchCodeLau

// strV = str.slice(3).replace(/nchCode/g, 'nchCodeLau'); // regular expression '/g' is the global flag
// console.log(str);    // nchCodeLau

// strV = str.slice(3).replace(/.*/, 'nchCodeLau');  // regular expression '/.*' is the entire string
// console.log(str);  // nchCodeLau

// strV = (`${str.slice(3)}Lau`);
// console.log(str); // nchCodeLau

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The original is: ${str}.
Sliced and diced is: ${strV}.`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
// a. using readline-sync
let sliceCount = Number(input.question('Enter number of letters to relocate from beginning to end: '));
console.log(typeof(sliceCount));
str = "LaunchCode";

// b. using prompt-sync
let userPromptInput = Number(prompt('Enter number of letters to relocate from beginning to end: '));
console.log(typeof(userPromptInput));

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
