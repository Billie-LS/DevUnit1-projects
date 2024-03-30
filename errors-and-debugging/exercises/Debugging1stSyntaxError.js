//Run this code first and examine the error message.
//Fix the syntax error then run the code again to check your work.

let launchReady = false;
let fuelLevel = 17000;

if (fuelLevel >= 20000) {
  console.log("Fuel level cleared.");
  launchReady = true;
} else {
  console.log("WARNING: Insufficient fuel!");
  launchReady = false;
}

let launchGood;

switch (true) {
  case fuelLevel >= 20000:
    console.log("Fuel level cleared.");
    launchGood = true;
    break;
  default:
    console.log("WARNING: Insufficient fuel!");
    launchGood = false;
}

// Define a variable 'launchProper' using a ternary operator
let launchProper =
  fuelLevel >= 20000 // Check if fuelLevel is greater than or equal to 20000
    ? // If condition is true, execute the following:
      (console.log("Fuel level cleared."), true) // Log message 'Fuel level cleared.' to the console and set 'launchReady' to true
    : // If condition is false, execute the following:
      (console.log("WARNING: Insufficient fuel!"), false); // Log warning message to the console and set 'launchReady' to false
