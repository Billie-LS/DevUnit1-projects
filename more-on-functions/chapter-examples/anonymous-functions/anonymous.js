let add = function(a, b) {
    return a + b;
};

console.log(add(1, 1));

let arrA = [];

let addA = function(a, b) {
    arrA.push(a + b);
    return arrA;
};

console.log(addA(1, 1));
console.log(arrA);

// named function
function reverse(str) {
    let lettersArray = str.split('');
    let reversedLettersArray = lettersArray.reverse();
    return reversedLettersArray.join('');
}

// anonymous function assigned to a variable 
let reverse2 = function (str) {
    let lettersArray = str.split('');
    let reversedLettersArray = lettersArray.reverse();
    return reversedLettersArray.join('');
};