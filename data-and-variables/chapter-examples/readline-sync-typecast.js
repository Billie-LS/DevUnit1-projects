const input = require('readline-sync');

let num1 = input.question("Enter a number: ");
let num2 = input.question("Enter another number: ");

console.log(typeof(num1));  // string
console.log(typeof(num2));  // string
console.log(num1 + num2);  // operates as concatenate two strings
console.log(Number(num1) + Number(num2));  // type casted to numbers