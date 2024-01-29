function reverse(str) {
  let lettersArray = str.split('');
  let reversedLettersArray = lettersArray.reverse();
  return reversedLettersArray.join('');
}

console.log(reverse("LaunchCode"));

// anonymous function assigned to a variable 
let reverse2 = function (str) {
  let lettersArray = str.split('');
  let reversedLettersArray = lettersArray.reverse();
  return reversedLettersArray.join('');
};

console.log(reverse2("LaunchCode"));

let f1 = function(str) {
  return str + str;
};

let f2 = f1;

console.log(f2("abcd"));
console.log(f1("abcd"));
