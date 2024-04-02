// Now consider both if/else blocks together (keeping the added console.log lines).
// Run the code and examine the output.

// Given the values for fuelLevel, crewStatus and computerStatus, should launchReady be true or false?
// Is the program behaving as expected?

let launchReady = false;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = "green";

if (fuelLevel >= 20000) {
  console.log("Fuel level cleared.");
  launchReady = true;
} else {
  console.log("WARNING: Insufficient fuel!");
  launchReady = false;
}

console.log("launchReady = ", launchReady);
console.log(`launchReady = ${launchReady}`);

if (crewStatus && computerStatus === "green") {
  console.log("Crew & computer cleared.");
  launchReady = true;
} else {
  console.log("WARNING: Crew or computer not ready!");
  launchReady = false;
}

console.log("launchReady = ", launchReady);
console.log(`launchReady = ${launchReady}`);

// Switch statement to check 'fuelLevel'
switch (true) {
  // Case where 'fuelLevel' is greater than or equal to 20000
  case fuelLevel >= 20000:
    // Log message 'Fuel level cleared.' to the console
    console.log("Fuel level cleared.");
    // Set 'launchProper' to true
    launchReady = true;
    //  log boolean value
    console.log(launchReady);
    // Exit switch statement
    break;
  // Default case for when 'fuelLevel' is less than 20000
  default:
    // Log warning message to the console
    console.log("\nWARNING: Insufficient fuel!");
    // Set 'launchProper' to false
    launchReady = false;
    //  log boolean value
    console.log(launchReady);
    // Exit switch statement
    break;
}

console.log("launchReady = ", launchReady);
console.log(`launchReady = ${launchReady}`);

switch (true) {
  // Case where 'crewStatus && computerStatus' are BOTH "green"
  case crewStatus && computerStatus === "green":
    // Log message 'Fuel level cleared.' to the console
    console.log("Crew & computer cleared.");
    // Set 'launchProper' to true
    launchReady = true;
    //  log boolean value
    console.log(launchReady);
    // Exit switch statement
    break;
  // Default case for when 'fuelLevel' is less than 20000
  default:
    // Log warning message to the console
    console.log("WARNING: Crew or computer not ready!");
    // Set 'launchProper' to false
    launchReady = false;
    //  log boolean value
    console.log(launchReady);
    // Exit switch statement
    break;
}

console.log("launchReady = ", launchReady);
console.log(`launchReady = ${launchReady}`);

// if (launchReady) {
//    console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
//    console.log('Liftoff!');
// } else {
//    console.log('Launch scrubbed.');
// }
