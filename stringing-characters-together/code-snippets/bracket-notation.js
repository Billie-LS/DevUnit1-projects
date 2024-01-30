let jsCreator = "Brendan Eich";

console.log(jsCreator[-1]);
console.log(jsCreator[42]);

let phrase = 'Code for fun'
console.log(phrase[2])

let firstInitial = jsCreator[0];
let lastInitial = jsCreator[8];

let outputStr = "JavaScript was created by somebody with initials " +
firstInitial + "." +
lastInitial + ".";

console.log(outputStr);

myStr = 'Index'
myStr[2] === 'n'; // false
console.log(myStr[2] === 'n')
myStr[4] === 'x';  // true
console.log(myStr[4] === 'x')
myStr[6] === ' ';  // false
console.log(myStr[6] === ' ')
myStr[0] === 'I';  // true
console.log(myStr[0] === 'I')

phrase = "JavaScript rocks!";
console.log(phrase[phrase.length - 8]);  // length=17, 17-8 = 9, index 9 = t 