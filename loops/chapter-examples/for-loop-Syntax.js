// simple for loop
for (let i = 0; i < 51; i++) {
    console.log(i);
}

// for loop anatomy

// for (initial expression; loop condition; update expression) {
//     loop body
//  }

// examples
for (let i = 3; i < 10; i++) {
    console.log(i);
}

let title = "LaunchCode";

for (let i = 6; i < title.length; i++) {
    console.log(title[i]);
}
/*
To avoid confusion and bugs, you should give your loop variable a unique name, 
one that you have not used elsewhere in your program. In cases where the loop variable 
is serving as a “counter” for iterations of a loop, it is conventional to use i for the variable name.
In the case of nested for loops (loops inside of loops), the variables j, k, etc. are often used.
*/

for (let i = 0; i < 42; i++) {
    console.log("LaunchCode");
}

// check understanding

let phrase = "Chili Cook-off";
console.log(phrase.length);

for (let i = 0; i < phrase.length - 1; i = i + 3) {
    console.log(phrase[i]);  // 'ClCkf'
}