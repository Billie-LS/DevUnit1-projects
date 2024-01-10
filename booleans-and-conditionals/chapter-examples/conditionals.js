let billHasBeenPaid = false;

if (!billHasBeenPaid) {
   console.log("Your bill is due soon!");
}

// works but NOT best practice to leave off brackets
if (!billHasBeenPaid)
   console.log("Your bill is due soon!");

let num = 5;
if (num % 2 === 0 && num > 3) {
    console.log(num, "is even");
    console.log(num, "is greater than 3");
 }

// Else
let billHasBeenPaidAgain = true;

if (!billHasBeenPaidAgain) {
   console.log("Your bill is due soon!");
} else {
   console.log("Your payments are up to date.");
}

// else if 
let x = 10;
let y = 20;

if (x > y) {
   console.log("x is greater than y");
} else if (x < y) {
   console.log("x is less than y");
} else {
   console.log("x and y are equal");
}

let x1 = 10;
let y1 = 10;

if (x1 > y1) {
   console.log("x is greater than y");
} else if (x1 < y1) {
   console.log("x is less than y");
}

/*
The rules are:

may not use else or else if without a preceding if statement.
else and else if clauses are optional.
Multiple else if statements may follow the if statement, but they must precede the else clause, if one is present.
Only one else clause may be used.
*/

let x2 = 10;
let y2 = 20;

if (x2 > y2) {
   console.log("x is greater than y");
} else if (x2 < y2) {
   console.log("x is less than y");
} else if (x2 % 5 === 0) {
   console.log("x is divisible by 5");
} else if (x2 % 2 === 0) {
   console.log("x is even");
}

// test knowledge
let a = 7;
if (a % 2 === 1) {
   console.log("Launch");
} else if (a > 5) {
   console.log("Code");
} else {
   console.log("LaunchCode");
}