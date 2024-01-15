// array methods

const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// Expected output: "array1:" ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// Expected output: reversed: ["three", "two", "one"]

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// Expected output: ["Dec", "Feb", "Jan", "March"]

const arrayNumbers = [1, 2, 3];

console.log(arrayNumbers.unshift(4, 5));  // Expected output: 5
console.log(arrayNumbers);  // Expected output: [4, 5, 1, 2, 3]

const arrayA = ['a', 'b', 'c'];
const arrayB = ['d', 'e', 'f'];
const arrayC1 = arrayA.concat(arrayB);
console.log(arrayC1); // Expected output:
const arrayC2 = arrayA.concat(arrayB, arrayC1);
console.log(arrayC2); // Expected output:

let charles = ['coder', 'Tech', 47, 23, 350];
charles.sort();
console.log(charles);

str = 'LaunchCode students rock!'
console.log(str.split(" "));

let groceryBag = ['bananas', 'apples', 'edamame', 'chips', 'cucumbers', 'milk', 'cheese'];
let selectedItems = [];

selectedItems = groceryBag.slice(2, 5).sort();
console.log(selectedItems);