const input = require('readline-sync');

function hello(name) {
    console.log('Hello,', name);
    name = 'Ruth';
    return doubleName(name);
}

function doubleName(name){
    console.log(name+name);
    return name+name;
}

let name = input.question("Please enter your name: ");

hello(name);
doubleName(name);
console.log(name);

console.log('testing');

let a = 0;

function myFunction() {
    let a = 10;
    console.log(a);
    return a;
}
myFunction()
console.log(a);