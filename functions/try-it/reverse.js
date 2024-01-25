// function reverse(str) {
//    let lettersArray = str.split('');
//    let reversedLettersArray = lettersArray.reverse();
//    return reversedLettersArray.join('');
// }


// function reverse2(str) {
//    let lettersArray = str.split('');
//    console.log(lettersArray);
//    let reversedLettersArray = lettersArray.reverse();
//    console.log(reversedLettersArray);
//    return reversedLettersArray.join('');
// }

// reverse2('hello world');
// console.log(reverse2('hello world'));

function reverse3(str) {
   return str.split('').reverse().join('');
   // let reversedLettersArray = lettersArray.reverse();
   // return reversedLettersArray.join('');
}

console.log(reverse3('hello world'));

function isPalindrome(str) {
   return reverse3(str) === str;
}

console.log(isPalindrome('hello world'));