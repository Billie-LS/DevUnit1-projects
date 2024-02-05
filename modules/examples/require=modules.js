//  import readline-sync module, initialize and assign to the variable 'input'
const input = require('readline-sync');

// let name = input.question("What is your name?");
let name = input['question']("What is your name?");

console.log(`Hello, ${name}`);


/*
best practice for importing one file into another:

The module is one level up: If we want to import hello.js into myCoolApp.js, then we add const hello = require('../hello.js'); on line 1 of myCoolApp.js.
The module is one level down: If we want to import myCoolApp.js into index.js, then we add const coolApp = require('./Projects/myCoolApp.js'); on line 1 of index.js. This tells Node to search for myCoolApp.js in the Projects sub-folder, which is in the same folder as index.js
*/

// The module is in the same folder - 
// uses syntax : ./ tells Node, module is in current project folder.
// to import amodule1.js into aindex.js, 
const amodule = require('./amodule1.js'); // on line 1 of aindex.js.

// The module is one level up -
// uses syntax : ../ tells Node, module in the folder one level UP from the project
// to import amodule1.js into aindex.js, 
const amodule = require('../amodule1.js'); // on line 1 of aindex.js.

// The module is one level down -
// uses syntax : ./Project tells Node, module in the folder one level DOWN from the project
// to import amodule1.js into aindex.js, 
const amodule = require('./Project/amodule1.js') // on line 1 of aindex.js.


// Check Your Understanding
