//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
console.log(language.slice(0,1)+language.slice(4,5));
console.log(language.slice(0,1).concat(language.slice(4,5)));

//2. Without using slice(), use method chaining to accomplish the same thing.
console.log(`one ${language.replace('JavaScript','JS')}`);

console.log(`two ${language1a = language.charAt(0) + language.charAt(4)}`);
console.log(`three ${language1b = language.charAt(0).concat(language.charAt(4))}`);

console.log(`four ${language2a = language.substring(0, 1) + language.substring(4, 5)}`);
console.log(`five ${language2b = language.substring(0, 1).concat(language.substring(4, 5))}`);

let initials = language.replace('Java', language.charAt(0)).replace('Script', language.charAt(4)); 
console.log(initials);

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviation for ${language} is ${initials}.`);

//4. Just for fun, try chaining 3 or more methods together, and then print the result.
language.replace('Java', language.charAt(0)).replace('Script', language.charAt(4)); 



//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
let titleCase = notTitleCase.replace('t', 'T').replace('c', 'C');
console.log(titleCase);

console.log(notTitleCase);
let titleCaseA = notTitleCase.replace('t','T') + notTitleCase.replace('c','C');
console.log(titleCaseA);

