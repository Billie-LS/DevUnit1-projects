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