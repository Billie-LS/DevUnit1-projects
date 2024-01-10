// JavaScript operator precedence dictates which order the operators are applied.
// The logical NOT operator, !, first. 
// The arithmetic operators, second
// The comparison operators, third 
// The logical && and || are applied last.
/*
x * 5 >= 10 && y - 6 <= 20
((x * 5) >= 10) && ((y - 6) <= 20)

5*3 > 10 && 4 + 6 === 11
((5*3) > 10) && ((4+6) === 11)
((5*3) > 10) && ((4+6) === 11)
*/

// logical 'and' is &&
console.log(7 > 5 && 5 > 3);  // true
console.log(7 > 5 && 2 > 3);  // false
console.log(2 > 3 && 'dog' === 'cat');  // false

// logical 'or' is ||
console.log(7 > 5 || 5 > 3);  // true
console.log(7 > 5 || 2 > 3);  // true
console.log(2 > 3 || 'dog' === 'cat');  // false
console.log('test');
console.log(4 < 3 || 2 < 3);  // true

//  logical 'not' is !
// The operator ! is sometimes called a “bang”
console.log(!true);  // false
console.log(!false);  // true

console.log( !(5 > 7) );  // true
console.log( !('dog' === 'cat') );  // true