phrase = 'Code for fun';
console.log(phrase[2]);   // d

myStr = 'Index';
console.log(myStr[2] === 'n'); // false
console.log(myStr[4] === 'x'); // true
console.log(myStr[6] === ' '); // false
console.log(myStr[0] === 'I'); // true

let phraseA = "JavaScript rocks!";
console.log(phraseA.length); // 17
console.log(phraseA.length-8); //  9
console.log(phraseA[9]); // t
console.log(phraseA[phraseA.length - 8]); // t

let word = 'Rutabaga';
console.log(word.length); // 8
console.log(word[8]); // undefined length = 8, zero index says max index is length-1 = 7

cityName = "Vienna";
stateName = "Virginia";
location = cityName + ", " + stateName

console.log(location.length) // 16

let language = "JavaScript";
language.replace('J', 'Q');
language.slice(0,5);
console.log(language);  // JavaScript
console.log(language.slice(1,6)); // avaSc

let org = "  The LaunchCode Foundation ";
let trimmed = org.trim();

console.log(trimmed);  // 

console.log('Launch\nCode');


// madlibs

let pluralNoun = 'donkeys';
let nameA = 'hickup';
let verb = 'slurp';
let adjective = 'meaty';
let color = 'blue';

console.log(`JavaScript provides a ${color} collection of tools — including ${adjective} syntax and ${pluralNoun} — that allows ${nameA} to ${verb} with strings.`);

const classes = ["science, computer, art"];
console.log(classes.length); // 1
const teachers = ["Jones", "Willoughby", "Rhodes"];
console.log(teachers.length); // 3

let charles = ['coder', 'Tech', 47, 23, 350];
charles.sort();
console.log(charles);

let strB = 'LaunchCode students rock!';
console.log(strB.split(" "));

let groceryBag = ['bananas', 'apples', 'edamame', 'chips', 'cucumbers', 'milk', 'cheese'];
let selectedItems = [];

selectedItems = groceryBag.slice(2, 5).sort();  // ['chips', 'cucumbers', 'edamame']
console.log(selectedItems);

const school = [
    ["science", "computer", "art"],
    ["Jones", "Willoughby", "Rhodes"]
 ];

console.log(school[1][0]);  // Jones
console.log(school[0].push("dance")); // 4
console.log(school[0]); // ["science", "computer", "art", "dance"]

console.log(school[1].unshift("Holmes")); // 4
console.log(school[1]); // ["Holmes", "Jones", "Willoughby", "Rhodes"]