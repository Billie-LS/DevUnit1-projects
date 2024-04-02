// Let’s break the code down into smaller chunks.
// Consider the first if/else block below.
// Add console.log(launchReady) after this block, then run the program.

//Given the fuelLevel value, should launchReady be true or false after the check?  Is the program behaving as expected?

let launchReady = false;
let fuelLevel = 17000;
// let crewStatus = true;
// let computerStatus = 'green';

if (fuelLevel >= 20000) {
  console.log("Fuel level cleared.");
  launchReady = true;
} else {
  console.log("WARNING: Insufficient fuel!");
  launchReady = false;
  console.log(launchReady);
}

// Define 'launchProper' variable
let launchProper;
// Switch statement to check 'fuelLevel'
switch (true) {
  // Case where 'fuelLevel' is greater than or equal to 20000
  case fuelLevel >= 20000:
    // Log message 'Fuel level cleared.' to the console
    console.log("Fuel level cleared.");
    // Set 'launchProper' to true
    launchProper = true;
    // Exit switch statement
    break;
  // Default case for when 'fuelLevel' is less than 20000
  default:
    // Log warning message to the console
    console.log("\nWARNING: Insufficient fuel!");
    // Set 'launchProper' to false
    launchProper = false;
    //  log boolean value
    console.log(launchProper);
}

// if (crewStatus && computerStatus === 'green'){
//    console.log('Crew & computer cleared.');
//    launchReady = true;
// } else {
//    console.log('WARNING: Crew or computer not ready!');
//    launchReady = false;
// }

// if (launchReady) {
//    console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
//    console.log('Liftoff!');
// } else {
//    console.log('Launch scrubbed.');
// }
