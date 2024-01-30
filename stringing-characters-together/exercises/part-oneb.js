let num = 1001;
console.log(String(num).length);

num = 123.45
console.log(String(num).length);

if (String(num).includes('.')) {
    console.log(String(num).length-1);
}else {
    console.log(String(num).length);
}

// Use ternary operator, check if numeric string includes a decimal point
// If true, length-1, else use the length directly
console.log(String(num).includes('.') ? String(num).length - 1 : String(num).length);


