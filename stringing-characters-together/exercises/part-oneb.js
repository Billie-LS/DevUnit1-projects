let num = 1001;

//Returns 'undefined'.
console.log(num1.length);

//Use type conversion to print the length (number of digits) of an integer.
console.log(String(num1).length);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let num2 = 123.45;
console.log(String(num2).length - 1);

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
let num3 = 123.457;
if (String(num3).includes(".")) {
  console.log(String(num3).length - 1);
} else {
  console.log(String(num3).length);
}

/*
code logs length of string representation of a number, accounting for the presence of a decimal point (`.`).

- `String(num)`: Converts the number `num` to a string.
- `.includes('.')`: Checks if the string representation contains a decimal point.
- `? String(num).length - 1`: If the string contains a decimal point, subtracts 1 from the length of the string to exclude the decimal point.
- `: String(num).length`: If the string does not contain a decimal point, returns the length of the string as is.
*/

// Use ternary operator, check if numeric string includes a decimal point
// If true, length-1, else use the length directly
console.log(
  String(num).includes(".") ? String(num).length - 1 : String(num).length
);
