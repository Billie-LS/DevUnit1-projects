let str = "blue";  // declare variable str and initialize to value "blue"
let reversed = "";

// Loops through each character string 'blue'
for (let i = 0; i < str.length; i++) {
    // concatenate current character to the beginning of the reversed string
    reversed = str[i] + reversed
    // reversed += str[i];  // reversed = str[i] + reversed
}

console.log(reversed);