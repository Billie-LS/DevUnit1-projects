/*
EXPRESSIONS AND EVALUATION
expression is a combination of values, variables, operators, and calls to functions. 
An expression can be thought of as a formula that is made up of multiple pieces

evaluation of an expression produces a value, known as the return value
*/
console.log(1 + 1);  // evaluating expression 1+1

let sum = 1 + 2; // declaration AND initialization
console.log(sum);  // evaluation

/*
Operators and Operands
operator is one or more characters that represents a computation i.e. multiplication, or division. 
The values an operator works on are called operands
*/

console.log(2 + 3);
console.log(2 - 3);
console.log(2 * 3);
console.log(2 ** 3);
console.log(3 ** 2);

let minutes = 645;  // declaration AND initialization
let hours = minutes / 60;  // declaration AND initialization
console.log(hours);  // evaluation

/*
acronym PEMDAS/BODMAS used to remember order of operations:

P = Parentheses / B = Brackets 
E = Exponentiation / O = Orders
M = Multiplication (from left to right Multiplication and Division)
D = Division (from left to right Multiplication and Division)
A = Addition (from left to right Addition and Subtraction)
S = Subtraction (from left to right Addition and Subtraction)

Exception to the left-to-right rule is the exponentiation operator **
*/
// the right-most ** operator is applied first
console.log(2 ** 3 ** 2)
// use parentheses to force the order you want
console.log((2 ** 3) ** 2)
