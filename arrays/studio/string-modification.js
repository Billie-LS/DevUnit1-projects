const input = require('readline-sync');
const prompt = require('prompt-sync')({ sigint: true });

let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let threeFrontToBack = str.slice(3).concat(str.slice(0,3));
console.log(threeFrontToBack);  // nchCodeLau

threeFrontToBack = str.slice(3) + str.slice(0,3);
console.log(threeFrontToBack);  // nchCodeLau

strV = str.slice(3).concat('Lau');
console.log(strV);    // nchCodeLau

strV = str.slice(3) + ('Lau'); 
console.log(strV);  // nchCodeLau

strV = str.slice(3).replace(/.*/, 'nchCodeLau');  // regular expression '/.*' is the entire string
console.log(strV);  // nchCodeLau

strV = str.slice(3).replace(/nchCode/g, 'nchCodeLau'); // regular expression '/g' is the global flag
console.log(strV);    // nchCodeLau

strV = str.slice(3);  // nchCode
strV = strV.replace('nchCode', 'nchCodeLau');
console.log(strV); // nchCodeLau

strV = (`${str.slice(3)}Lau`);
console.log(strV); // nchCodeLau

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The original is: ${str}.
Sliced and diced is: ${strV}.`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
// a. using readline-sync - identify datatype
let sliceCount = Number(input.question('Enter number of letters to relocate from beginning to end: '));
console.log(typeof(sliceCount));
str = "LaunchCode";
// console.log(str.length); // 10

// b. using prompt-sync - identify datatype
let userPromptInput = Number(prompt('Enter number of letters to relocate from beginning to end: '));
console.log(typeof(userPromptInput));

str = "LaunchCode";

//3) Add validation to your code to deal with user inputs that are longer than the word. 
// In such cases, default to moving 3 characters. Also, the template literal should note the error.
sliceCount = Number(input.question('Enter number of letters to relocate from beginning to end: '));

if (sliceCount >= 0 && sliceCount < str.length) {
    // Remove the first 'sliceCount' characters from the beginning and add them to the end.
    str =   str.slice(sliceCount) + str.slice(0, sliceCount);
    console.log(str);
} else {
    // Default to moving 3 characters.
    str = str.slice(3).concat('Lau');
    console.log(`Error: Invalid input. Moving 3 characters. Modified string is: ${str}`);
}


str = "LaunchCode";

userPromptInput = Number(prompt('Enter number of letters to relocate from beginning to end: '));

if (userPromptInput >= 0 && userPromptInput < str.length) {
    // Remove the first 'sliceCount' characters from the beginning and add them to the end.
    str =   str.slice(userPromptInput) + str.slice(0, userPromptInput);
    console.log(str);
} else {
    // Default to moving 3 characters.
    str = str.slice(3).concat('Lau');
    console.log(`Error: Invalid input. Moving 3 characters. Modified string is: ${str}`);
}



// // alternate approach of classmate guided by Instructor Phillip 
// if (sliceCount >= 0 && sliceCount < str.length){
//     let firstSlice = str.slice(0, sliceCount);
//     let tailSlice = str.slice(sliceCount);
//     console.log(tailSlice.concat(firstSlice));
// } else {
//     sliceCount = 3;  // Default to moving first 3 characters
//     let firstSlice = str.slice(0, sliceCount);
//     let tailSlice = str.slice(sliceCount);
//     console.log(`Error: Invalid input. Moving 3 characters. Modified string is: ${tailSlice+firstSlice}`);
// }