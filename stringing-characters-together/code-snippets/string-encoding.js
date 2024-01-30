
let org = "  The LaunchCode Foundation ";
let trimmed = org.trim();

console.log(trimmed);  // returns The 'LaunchCode Foundation' without lead or trail empty space

const unicodeValue = 65; // Unicode value for 'A' 
console.log(typeof unicodeValue); // returns
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