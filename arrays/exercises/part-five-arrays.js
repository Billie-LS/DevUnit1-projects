let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log(str.split());  // [ 'In space, no one can hear you code.' ]
console.log(str.split('e'));  // [ 'In spac', ', no on', ' can h', 'ar you cod', '.' ]
console.log(str.split(' '));  // [ 'In',  'space,', 'no',  'one', 'can', 'hear', 'you', 'code.']
console.log(str.split(''));  /*
[
  'I', 'n', ' ', 's', 'p', 'a', 'c',
  'e', ',', ' ', 'n', 'o', ' ', 'o',
  'n', 'e', ' ', 'c', 'a', 'n', ' ',
  'h', 'e', 'a', 'r', ' ', 'y', 'o',
  'u', ' ', 'c', 'o', 'd', 'e', '.'
]
*/

//2) Use the join method on the array to identify the purpose of the parameter inside the ().
// arr = ['B', 'n', 'n', 5];
console.log(arr.join());  // B,n,n,5
console.log(arr.join(''));  // Bnn5
console.log(arr.join(' '));  // B n n 5
console.log(arr.join(','));  // B,n,n,5
console.log(arr.join(', '));  // B, n, n, 5

//3) Do split or join change the original string/array?  NO

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
cargoHold = cargoHold.split(',').sort().join();
console.log(cargoHold);  // batteries,food,plasma sword,space suits,water