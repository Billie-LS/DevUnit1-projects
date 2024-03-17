console.log(true);
console.log(typeof true); // boolean
console.log(typeof false); // boolean

console.log(typeof true);
console.log(typeof "true");

console.log(Boolean("true")); // true
console.log(Boolean("TRUE")); // true
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean("")); // false
console.log(Boolean("LaunchCode")); // true

console.log(5 == 5); // true
console.log(5 == 6); // false

console.log(true == "true"); // false

console.log(7 == "7"); // true
console.log(0 == false); // true
console.log(0 == ""); // true

// || truth table
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log(3 == 4); // false
console.log(3 + 4 === 7); // true
console.log("false"); // string 'false', NOT boolean

// conversion, non-empty string is 'truthy' in JavaScript
let emptyString = "";
let nonEmptyString = "Hello, World!";

// boolean conversion with Boolean()
let isEmptyStringTrue = Boolean(emptyString); // false
let isNonEmptyStringTrue = Boolean(nonEmptyString); // true

console.log(isEmptyStringTrue); // Outputs: false
console.log(isNonEmptyStringTrue); // Outputs: true

let a = 7;
if (a % 2 === 1) {
  // 7 % 2 = 1
  console.log("Launch");
} else if (a > 5) {
  // not seen as first if condition met; 7 % 2 = 1
  console.log("Code");
} else {
  // not seen as first if condition met
  console.log("LaunchCode");
}

let b = 9;
if (b % 2 === 1) {
  // 7 % 2 = 1
  console.log("Launch");
}
if (b % 2 !== 1 && b > 5) {
  // not seen as first if condition met; 7 % 2 = 1
  console.log("Code");
}
if (b % 2 !== 1 && !(b > 5)) {
  // not seen as first if condition met
  console.log("LaunchCode");
}

console.log("test output below");
let num = 7;

if (num % 2 === 0) {
  if (num % 2 === 1) {
    console.log("odd");
  }
}

let test = num + num;
console.log(test);
