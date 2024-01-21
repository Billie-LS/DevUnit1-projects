// for loop example
for (let i = 0; i < 51; i++) {
  console.log(i);
}

// rewritten for loop as while loop

let i = 0;  // loop counter initialization

while (i < 51) {  // conditional expression
  console.log(i);  // body loop
  i++;  // iteration counter
}

// while loop input validation
const input = require('readline-sync');

let num = input.question('Please enter a positive number:');
num = Number(num);  // loop counter initialization and type conversion

while (num <= 0) {  // conditional expression
  num = input.question('Invalid input. Please enter a positive number:');  // loop body : prompts for positive number
  num = Number(num);  // preprocessing type conversion and iteration step
}

// correct infinite loop
let n = 10;
let answer = 1;

while (n > 0 && n < 11) {
  answer = answer + n;
  n = n + 1;
}

console.log(answer);

// 