//This block of code hides two syntax errors.

// Run the code and find the mistakes.
// Only ONE error will be flagged at a time.
// Fix that ONE problem, and then re-run the code to check yer work. Avoid trying to fix multiple issues at once.

let launchReady = false;
let crewStatus = true;
let computerStatus = "green";

if (crewStatus && computerStatus === "green") {
  console.log("Crew & computer cleared.");
  launchReady = true;
} else {
  console.log("WARNING: Crew or computer not ready!");
  launchReady = false;
}

if (launchReady) {
  console.log("10, 9, 8, 7, 6, 5, 4, 3, 2, 1...");
  console.log("Fed parrot...");
  console.log("Ignition...");
  console.log("Liftoff!");
} else {
  console.log("Launch scrubbed.");
}

// Switch statement to check 'fuelLevel'
let fuelLevel = 27000;

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
    console.log("3, 2, 1...\n");
    // Using Array.from() and join() to log a countdown
    console.log(
      // Array.from() create array length 10, ranging 10 to 1
      Array.from({ length: 10 }, (_, i) => 10 - i).join(", ") + "..."
    );
    console.log("Liftoff!");
    // Exit switch statement
    break;
  default:
    console.log("Launch scrubbed.");
    // Exit switch statement
    break;
}
