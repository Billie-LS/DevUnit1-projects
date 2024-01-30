/*
strings are immutable. 
- string methods will not change ORIGINAL/OLD string 
- string methods return a NEW string that is the result of the given operation.
*/

let nonprofit = "LaunchCode";

console.log(nonprofit.toLowerCase());
console.log(nonprofit);

let language = "JavaScript";
console.log(language.replace('J', 'Q')); // QavaScript

console.log(language.slice(0,5)); // JavaS

console.log(language);  // JavaScript
