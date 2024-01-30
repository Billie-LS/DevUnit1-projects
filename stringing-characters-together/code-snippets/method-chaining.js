//String methods can be combined in a process called method chaining.

let word = 'JavaScript';
// stringName.toUpperCase()
console.log(word.toUpperCase()); //Returns ``JAVASCRIPT``
console.log(word.toLowerCase()); //Returns ``javascript``

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