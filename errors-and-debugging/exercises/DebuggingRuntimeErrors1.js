//Run this code first and examine the error message.
//Pay close attention to any line numbers mentioned in the message - these will help locate and repair the mistake in the code.

let launchReady = false;
let fuelLevel = 17000;

if (fuelLevel >= 20000) {
  console.log("Fuel level cleared.");
  launchReady = true;
} else {
  console.log("WARNING: Insufficient fuel!");
  launchReady = false;
}

// Switch statement to check 'fuelLevel'
switch (true) {
  // Case where 'fuelLevel' is greater than or equal to 20000
  case fuelLevel >= 20000:
    // Log message 'Fuel level cleared.' to the console
    console.log("Fuel level cleared.");
    // Set 'launchProper' to true
    launchReady = true;
    //  log boolean value
    console.log(`launchReady = ${launchReady}`);
    // Exit switch statement
    break;
  // Default case for when 'fuelLevel' is less than 20000
  default:
    // Log warning message to the console
    console.log("\nWARNING: Insufficient fuel!");
    // Set 'launchProper' to false
    launchReady = false;
    //  log boolean value
    console.log(`launchReady = ${launchReady}`);
    // Exit switch statement
    break;
}
