// bracket notation with index
let programmingLanguages = ["JavaScript", "Python", "Java", "C#"];

console.log(programmingLanguages[0]);  // output JavaScript
console.log(programmingLanguages[3]);  // C#

// What will happen when index 4 is requested?
console.log(programmingLanguages[4]);  // output undefined
// undefined is a special value in JavaScript that means no value has been assigned.

let programmingLanguages1 = [
    "JavaScript", // index 0
    "Python",     // index 1
    "Java",       // index 2
    "C#"          // index 3
];

console.log(programmingLanguages1[-1]);  // output undefined
console.log(programmingLanguages1[100]);  // output undefined

// Arrays are mutable
let javaScriptFrameworks = ["React", "Angular", "Ember"];
console.log(javaScriptFrameworks);  // ["React", "Angular", "Ember"]

// Set the value of index 2 to be "Vue"
javaScriptFrameworks[2] = "Vue";

// Notice the value at index 2 is now "Vue"
console.log(javaScriptFrameworks);  // ["React", "Angular", "Vue"]

