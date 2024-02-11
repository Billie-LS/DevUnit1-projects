let a = 0;
console.log(a);

function coolFunction() {
    let b = 2;
    console.log(`a = ${a}, b = ${b}.`);
    return a + b;
}

a += 1;
console.log(a);

coolFunction();
// console.log(b);

console.log('playing around here below');
function notCoolFunction() {
    let b = 2;
    console.log(`a = ${a}, b = ${b}.`);
    a= b+2;
};

console.log(a);
notCoolFunction();
console.log(a);