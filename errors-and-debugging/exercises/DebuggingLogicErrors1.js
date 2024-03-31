// Run this sample code as-is and examine the output.
// Should the shuttle have launched? No !!!
// Did it?  YES  !!!!
// The shuttle should not have launched. The messages to the console tell a different story.

// Do not worry about fixing the code yet, we will do that in the next series of exercises.

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

// Using a ternary operator to set 'launchGood' based on 'fuelLevel'
let launchGood =
  fuelLevel >= 20000 // Check if 'fuelLevel' is greater than or equal to 20000
    ? (console.log("Fuel level cleared."), true) // If true, log message 'Fuel level cleared.' and set 'launchReady' to true
    : (console.log("WARNING: Insufficient fuel!"), false); // If false, log warning message and set 'launchReady' to false

// Define 'launchReady' variable
let launchProper;

// Switch statement to check 'fuelLevel'
switch (true) {
  // Case where 'fuelLevel' is greater than or equal to 20000
  case fuelLevel >= 20000:
    // Log message 'Fuel level cleared.' to the console
    console.log("Fuel level cleared.");
    // Set 'launchReady' to true
    launchProper = true;
    // Exit switch statement
    break;
  // Default case for when 'fuelLevel' is less than 20000
  default:
    // Log warning message to the console
    console.log("WARNING: Insufficient fuel!");
    // Set 'launchReady' to false
    launchProper = false;
}

if (crewStatus && computerStatus === "green") {
  console.log("Crew & computer cleared.");
  launchReady = true;
} else {
  console.log("WARNING: Crew or computer not ready!");
  launchReady = false;
}

if (launchReady) {
  console.log("10, 9, 8, 7, 6, 5, 4, 3, 2, 1...");
  console.log("Liftoff!");
} else {
  console.log("Launch scrubbed.");
}
