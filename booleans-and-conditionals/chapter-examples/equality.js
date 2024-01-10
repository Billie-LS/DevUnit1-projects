// loose equality
// If the two operands to == are of different data types, 
// JavaScript will implicitly convert the operands to identical data type before comparing
console.log(7 == "7");  // true
console.log(0 == false);  // true
console.log(0 == '');  // true

// The == operator is non-transitive
console.log('0' == 0);  // true
console.log(0 == '');  // true
console.log('0' == '');  // false

// the inequality operator !=

// strict equality; operator === compares two operands without converting their data types
console.log(7 === "7");
console.log(0 === false);
console.log(0 === '');
console.log(false === '');

// strict inequality operator, !==

// check understanding
console.log(4 == "4")