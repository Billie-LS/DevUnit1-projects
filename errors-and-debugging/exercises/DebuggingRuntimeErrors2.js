let launchReady = false;
let fuelLevel = 27000;

if (fuelLevel >= 20000) {
  console.log("Fuel level cleared.");
  launchReady = true;
} else {
  console.log("WARNING: Insufficient fuel!");
  launchReady = false;
}

if (launchReady) {
  console.log("10, 9, 8...");
  console.log("Fed parrot...");
  console.log("6, 5, 4...");
  console.log("Ignition...");
  console.log("3, 2, 1...");
  console.log("Liftoff!");
} else {
  console.log("Launch scrubbed.");
}

// Switch statement to check 'fuelLevel'
switch (true) {
  // Case where 'fuelLevel' is greater than or equal to 20000
  case fuelLevel >= 20000:
    // Log message 'Fuel level cleared.' to the console
    console.log("\nFuel level cleared.");
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

switch (true) {
  case launchReady:
    console.log("10, 9, 8...");
    console.log("Fed parrot...");
    console.log("6, 5, 4...");
    console.log("Ignition...");
    console.log("3, 2, 1...");
    console.log("Liftoff!");
    // Exit switch statement
    break;
  default:
    console.log("Launch scrubbed.");
    // Exit switch statement
    break;
}
