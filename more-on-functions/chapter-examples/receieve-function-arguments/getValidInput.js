const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }
    return userInput;
}

// TODO 1a: write a validator 
// that ensures input is letter "a"

let letterIs_a = function(str){
  return str === 'a';
};
// Be sure to test your code!
console.log(getValidInput('Enter the letter a: ', letterIs_a));


// TODO 1b: write a validator 
// that ensures input starts with "a"

let firstLetterIs_a = function(str){
  return str.charAt(0) === 'a';

};
// Be sure to test your code!
console.log(getValidInput('Enter a word or string that begins with letter a: ', firstLetterIs_a));

// TODO 2a: write a validator 
// that ensures input is a vowel
let letterIsVowel = function(str){
  // let lowerCaseStr = str.toLowerCase();
  // return lowerCaseStr === 'a' || lowerCaseStr == 'e' || lowerCaseStr == 'i' || lowerCaseStr == 'o' || lowerCaseStr == 'u';
  // console.log(['a', 'e', 'i', 'o', 'u'].includes(str.toLowerCase()));
  return ['a', 'e', 'i', 'o', 'u'].includes(str.toLowerCase());
};
// Be sure to test your code!
console.log(getValidInput('Enter a vowel: ', letterIsVowel));

// TODO 2b: write a validator 
// that ensures input starts with a vowel
let FirstLetterIsVowel = function(str){
  let lowerCaseStr = str.toLowerCase();
  return lowerCaseStr.charAt(0) === 'a' || lowerCaseStr.charAt(0) == 'e' || lowerCaseStr.charAt(0) == 'i' || lowerCaseStr.charAt(0) == 'o' || lowerCaseStr.charAt(0) == 'u';
  // return ['a', 'e', 'i', 'o', 'u'].includes(str.toLowerCase());
};
// Be sure to test your code!
console.log(getValidInput('Enter a word or string that begins with a vowel : ', FirstLetterIsVowel));



let isValidPassword = function(password) {

    // Passwords should have at least 8 characters
    return password.length >= 8;
    // if (password.length < 8) {
    // return false;
    // }
    // return true;
};

console.log(getValidInput('Create a password:', isValidPassword));
