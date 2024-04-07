// Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'.
let string1 = "JavaScript";
let initials = string1.slice(0, 1) + string1.slice(4, 5);
console.log(initials);

//2. Without using slice(), use method chaining to accomplish the same thing.
console.log(`one ${string1.replace("JavaScript", "JS")}`);

console.log(string1.charAt(0));
console.log(string1.charAt(4));

let methChainStr1 = string1.charAt(0).concat(string1.charAt(4));
console.log(methChainStr1);

console.log(string1.substring(0, 1));
console.log(string1.substring(4, 5));

let methChainStr2 = string1.substring(0, 1).concat(string1.substring(4, 5));
console.log(methChainStr2);

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = "title case";
console.log(notTitleCase);

//  .replace method = str.replace(pattern, replacement)
let titleCase = notTitleCase.replace("t", "T").replace("c", "C");
// titleCase = titleCase.replace('c', 'C');
console.log(titleCase);

// try new stuff
