// Let’s break the code down into smaller chunks.
// Now consider the second if/else block.
// Add another console.log(launchReady) after this block and run the program.

// Given the values for crewStatus and computerStatus, should launchReady be true or false after the check?
// Is the program behaving as expected?

let launchReady = false;
// let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = "green";

// if (fuelLevel >= 20000) {
//    console.log('Fuel level cleared.');
//    launchReady = true;
// } else {
//    console.log('WARNING: Insufficient fuel!');
//    launchReady = false;
// }

if (crewStatus && computerStatus === "green") {
  console.log("Crew & computer cleared.");
  launchReady = true;
  console.log(launchReady);
} else {
  console.log("WARNING: Crew or computer not ready!");
  launchReady = false;
  console.log(launchReady);
}

console.log("\n");

// Switch statement to check 'crewStatus && computerStatus'
let launchProper = false;
switch (true) {
  // Case where 'crewStatus && computerStatus' are BOTH "green"
  case crewStatus && computerStatus === "green":
    // Log message 'Fuel level cleared.' to the console
    console.log("Crew & computer cleared.");
    // Set 'launchProper' to true
    launchProper = true;
    // Exit switch statement
    break;
  // Default case for when 'fuelLevel' is less than 20000
  default:
    // Log warning message to the console
    console.log("WARNING: Crew or computer not ready!");
    // Set 'launchProper' to false
    launchProper = false;
}

// if (launchReady) {
//    console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
//    console.log('Liftoff!');
// } else {
//    console.log('Launch scrubbed.');
// }
