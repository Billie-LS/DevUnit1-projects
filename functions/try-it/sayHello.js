function sayHello() {
   console.log("Hello, World!");
}
sayHello()



let message = "Hello, World!";

function printMessage() {
   console.log(message);
}

printMessage();
message = "Goodbye";
printMessage();

/*
Shadowing, 
a function parameter “casts it’s shadow over” a variable of the same name
effectively hiding it
*/

let message2 = "Hello, World!";

function printMessage2(message2) {
   console.log(message2);
}

printMessage("Goodbye");


let num = 42;

function isEven (num) { 
   return num % 2 === 0; // returns false
}

console.log(isEven(43));  // prints false