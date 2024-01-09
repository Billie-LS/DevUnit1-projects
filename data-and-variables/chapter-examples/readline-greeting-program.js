// const input = require('readline-sync');

// let name = input.question("Enter your name: ");

const inputQuestion1 = require('readline-sync');
const inputQuestion2 = require('readline-sync');
let nameFirst = inputQuestion1.question("Enter your first name: ");
let nameLast = inputQuestion2.question("Enter your last name: ");
console.log('First name: ' + nameFirst + '\nLast name: ' + nameLast + '\nLast, First: ' + nameFirst+',', nameLast)