// concatenation of the variables
let name1 = "Jack";
let currentAge = 9;

console.log("Next year, " + name1 + " will be " + (currentAge + 1) + ".");

let name2 = "Jack";
let currentAge2 = 9;

console.log(`Next year, ${name2} will be ${currentAge + 1}.`);

let poem = `
The mind chases happiness.
The heart creates happiness.
The soul is happiness
And it spreads happiness
All-where.

– Sri Chinmoy`;

console.log(poem);

// test knowledge mad-libs style

let pluralNoun = 'cats';
let name = 'zack';
let verb = 'chop';
let adjective = 'creamy';
let color = 'pink';

console.log("JavaScript provides a "+ color +" collection of tools — including " + adjective + " syntax and " + pluralNoun + " — that allows "+ name +" to "+ verb +" with strings.")