// THE MATH OBJECT
// Math Properties Are Constants
// The Math object has 8 defined properties. 
// These represent mathematical constants, like the value for pi (π) or the square root of 2.

console.log(Math.PI);
console.log(Math.PI*4);
console.log(Math.PI + Math.PI);

//  properties within Math cannot be changed by the user.

console.log(Math.PI); // 3.141592653589793

Math.PI = 1234;

console.log(Math.PI); // 3.141592653589793 - unchanged

// constants of Math object

console.log('constants'); 
console.log(Math.E); // Returns Euler's number 2.718281828459045
console.log(Math.LN2); // Returns the natural logarithm of 2  0.6931471805599453
console.log(Math.LN10); // Returns the natural logarithm of 10 2.302585092994046
console.log(Math.LOG10E); // Returns the base-10 logarithm of E 0.4342944819032518
console.log(Math.LOG2E); // Returns the base-2 logarithm of E 1.4426950408889634
console.log(Math.PI); // Returns PI 3.141592653589793
console.log(Math.SQRT1_2); // Returns the square root of 1/2  0.7071067811865476
console.log(Math.SQRT2); // Returns the square root of 2  1.4142135623730951
