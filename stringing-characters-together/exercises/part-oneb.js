let num = 1001;
console.log(String(num).length);

num = 123.45;
console.log(String(num).length);

if (String(num).includes(".")) {
  console.log(String(num).length - 1);
} else {
  console.log(String(num).length);
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
