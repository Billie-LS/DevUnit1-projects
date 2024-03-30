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

let launchProper =
  fuelLevel >= 20000
    ? (console.log("Fuel level cleared."), true)
    : (console.log("WARNING: Insufficient fuel!"), false);
