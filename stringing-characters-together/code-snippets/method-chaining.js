//String methods can be combined in a process called method chaining.

let word = 'JavaScript';
// stringName.toUpperCase()
console.log(word.toUpperCase()); //Returns ``JAVASCRIPT``

// stringName.slice(i)
console.log(word.slice(4));  // returns Script
console.log(word.slice(4).toUpperCase());  
//      first, .slice returns Script , 
//      then .toUpperCase() returns SCRIPT, so answer is SCRIPT

// Experimentation

// stringName.slice(i,j)
console.log(word.slice(4,6));  // returns Sc
console.log(word.slice(4,6).toUpperCase());  
//      first, .slice returns Sc , 
//      then .toUpperCase() returns SC, so answer is SC

// stringName.replace('searchChar', 'replacementChar')
console.log(word.replace('Java', 'Tea'));  // returns TeaScript

// stringName.charAt()
console.log(word.charAt(4));  // returns S
console.log(word.charAt(4).toLowerCase());  // returns s

// Check Your Understanding
let language = "JavaScript";
language.replace('J', 'Q');  
console.log(language.replace('J', 'Q'));  // Qavascript
language.slice(0,5); 
console.log(language.slice(0,5)); // JavaS
console.log(language);  // JavaScript

console.log(language.slice(1,6));  // avaSc

let org = "  The LaunchCode Foundation ";
let trimmed = org.trim();

console.log(trimmed);  // returns The 'LaunchCode Foundation' without lead or trail empty space

const unicodeValue = 65; // Unicode value for 'A' 
const char = String.fromCharCode(unicodeValue); 
console.log(char); // Output: 'A'


let codes = [76, 97, 117, 110, 99, 104, 67, 111, 100, 101];

let characters = String.fromCharCode(codes[0]) + String.fromCharCode(codes[1])
                + String.fromCharCode(codes[2]) + String.fromCharCode(codes[3])
                + String.fromCharCode(codes[4]) + String.fromCharCode(codes[5])
                + String.fromCharCode(codes[6]) + String.fromCharCode(codes[7])
                + String.fromCharCode(codes[8]) + String.fromCharCode(codes[9]);
console.log(characters);

let fullWord = String.fromCharCode(...codes);  // use spread operator `...` instead
console.log(fullWord);

const degreeSymbol = String.fromCharCode(0x00B0);  //  0x00B0 is hexadecimal of the Unicode value for the degree symbol.
console.log(degreeSymbol); // Output: °

let string = 'CoffeeBeans'
let stringTwo = string.charAt(0);    // declare and initialize variable stringTwo
console.log(stringTwo);  // C
console.log(`index 7 of stringTwo is ${stringTwo.charAt(7)}`); //  index 7 of stringTwo is nothing
let stringThree = stringTwo.charAt(7);  // declare and initialize variable stringThree
console.log(`stringThree is ${stringThree}`);  // stringThree is nothing
console.log(`datatype of stringThree is ${typeof(stringThree)}`); //  datatype of stringThree is string 
console.log(stringThree === ""); //  true  // therefore stringThree is empty, i.e. ""