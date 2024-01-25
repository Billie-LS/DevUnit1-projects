let message = "Hello, World!";

function printMessage() {
   console.log(message);
}

printMessage();
message = "Goodbye";
printMessage();

function plusTwo(num) {
   return num + 2;
}

let a = 2;

for (let i=0; i < 4; i++) {
   a = plusTwo(a);
   // 4, 6, 8, 10
}

console.log(a);

function repeater(str) {
   let repeated = str + str;
   console.log(repeated);
}

repeater('Bob');
// BobBob

function repeater(str) {
   let repeated = str + str;
   console.log(repeated);
}

repeater('Bob');