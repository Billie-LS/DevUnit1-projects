// Check Your Understanding
// What is printed by the following code?

let charles = ['coder', 'Tech', 47, 23, 350];
charles.sort();
console.log(charles); // [ 23, 350, 47, 'Tech', 'coder' ]

// Which statement converts the string str = 'LaunchCode students rock!' into the array ['LaunchCode', 'students', 'rock!']?
str = 'LaunchCode students rock!';
strArr = str.split(',');
console.log(strArr); // [ 'LaunchCode students rock!' ]

strArr = str.split('');
console.log(strArr); // ['L', 'a', 'u', 'n', 'c', 'h','C', 'o', 'd', 'e', ' ', 's','t', 'u', 'd', 'e', 'n', 't','s', ' ', 'r', 'o', 'c', 'k', '!']

strArr = str.split(' ');
console.log(strArr); // [ 'LaunchCode', 'students', 'rock!' ]

// What is printed by the following program?
let groceryBag = ['bananas', 'apples', 'edamame', 'chips', 'cucumbers', 'milk', 'cheese'];
let selectedItems = [];

selectedItems = groceryBag.slice(2, 5).sort();  [ 'chips', 'cucumbers', 'edamame' ]
console.log(selectedItems);

