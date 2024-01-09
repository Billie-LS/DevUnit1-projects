/*
variable is a name that refers to a value
a value is a single, specific piece of data, 
such as a specific number or string. 
Variables allow us to store values for later use
*/

// Declaring and Initializing Variables With keyword let

// Declaring variable 'programmingLanguage' with keyword let
let programmingLanguage; // variable declaration

/*
a declared variable can then be given a value using an assignment statement,
which uses = to give a variable a value
*/

// The act of assigning a variable a value for the first time is called initialization
let ourProgrammingLanguage;  // variable declaration
ourProgrammingLanguage = "JavaScript";  // initialization

// declare and initialize a variable with a single line of code
let theProgrammingLanguage = 'javascript'; // declaration AND initialization

// Evaluating Variables
// When refer to variable name, are evaluating the variable
console.log("Hello, World!"); // outputting string 'Hello, World!'

let message = "Hello, World!";  // declaration AND initialization of variable 'message'
console.log(message);  // evaluating the variable 'message'

let greet = "What's up, Doc?"; // declaration AND initialization of variable
let n = 17;  // declaration AND initialization of variable
let pi = 3.14159;  // declaration AND initialization of variable

console.log(greet);  // evaluating the variable 'greet'
console.log(n);  // evaluating the variable 'n'
console.log(pi);  // evaluating the variable 'pi'

// determine the type of a variable
console.log(typeof greet);  
console.log(typeof n);  
console.log(typeof pi);  

// Reassigning Variables
// assign a initial value to a variable (initialization) and later assign it a different value
let day = "Thursday";  // declaration AND initialization
console.log(day);  // evaluation
console.log(typeof day);

day = "Friday";  // reassigning
console.log(day);  // evaluation
console.log(typeof day);

day = 21;  // reassigning
console.log(day);  // evaluation
console.log(typeof day);