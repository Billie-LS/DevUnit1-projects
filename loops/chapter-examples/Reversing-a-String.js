let str = "blue";  // declare variable str and initialize to value "blue"
let reversed = "";  // accumulator variable

// Loops through each character string 'blue'
for (let i = 0; i < str.length; i++) {
    // concatenate current character to the beginning of the reversed string
    reversed = str[i] + reversed
    // reversed += str[i];  // will NOT reverse: reversed = reversed + str[i]
}

console.log(reversed);

// Summing an Array

let numbers = [2, -5, 13, 42];
let total = 0;  // accumulator variable

for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];  // total = total + numbers[i]
}
console.log(total);