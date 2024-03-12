// testing condole.log() function
console.log("Hello, JavaScript.");

process.stdout.write("Hello, JavaScript.");

// Logging the number 2001 to the console using console.log()
console.log(2001);

// The following line will not work because process.stdout.write() expects a string, not a number
// process.stdout.write(2001);

// Writing the string '2001' to the standard output stream using process.stdout.write()
process.stdout.write("2001");

// Writing the string representation of the number 2001 to the standard output stream using process.stdout.write()
process.stdout.write(String(2001));

// Writing the string representation of the number 2001 to the standard output stream using process.stdout.write() and string interpolation
process.stdout.write(`${2001}`);

console.log("What", "do", "commas", "do?");
console.log("Does", "adding", "space", "matter?");
console.log("Launch" + "Code");
console.log("LaunchCode was founded in", 2013);

// testing the \n function (i.e. new line function)
console.log("python\nJavaScript\nJava\nC#\nRust");

// testing the \t function (i.e. tab function)
console.log("python\tJavaScript\tJava\tC#\tRust");

// testing the \n function (i.e. new line function) and the \t function (i.e. tab function)
console.log("\tpython\n\tJavaScript\n\tJava\n\tC#\n\tRust");
