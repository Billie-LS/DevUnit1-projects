
console.log(typeof "17");
console.log(typeof "3.2");

console.log(typeof 'This is a string');
console.log(typeof "And so is this");

// typeof and type conversion

// using number function to convert string to number
console.log(Number("2345"));
// using typeof in front of the number function
console.log(typeof Number("2345"));
console.log(Number(17));

/* 
using number function with a non-numeric string
NaN is a special JS value represents the state of not being a number. 
*/
console.log(Number("23bottles"));

// using string function to convert to string
// output will look like a number
console.log(String(17));
console.log(String(123.45));
// using typeof reveals the number is actually a string
console.log(typeof String(123.45));

// understanding check
console.log(Number('3'));
console.log(Number('three'));  // should be NaN
console.log(Number('3 3'));
console.log(Number('33'));