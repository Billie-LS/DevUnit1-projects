// Strings are immutable, cannot change the individual characters within a given string
let nonprofit = "Launchcode";

console.log(nonprofit);
// attempt to change c character to C character
nonprofit[6] = "C";
// JavaScript ignores request to alter a string, no error message given

console.log(nonprofit);  // Launchcode ; no change, string immutable

// Not changing string, rather re-assign value of a variable
nonprofit = "LaunchCode";
console.log(nonprofit);  // will output the new value of variable nonprofit

pet = 'cat'
console.log(pet + 's');  // concatenating to an output
console.log(pet);  // string and variable value unchanged
pet += 's';  // reassigning the value of the variable pet
console.log(pet);