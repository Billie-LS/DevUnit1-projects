// The value of launchReady assigned in the first if/else block gets changed in the second if/else block. Dangerous waters...
// Since the issue is with launchReady, ONE way to fix the logic error is to use a different variable to store the fuel check result.
// Refactor the code to do this. Verify that your change works by updating the console.log statements.

let launchReady = "";
let crewReady = "";
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = "green";

if (fuelLevel >= 20000) {
  console.log("Fuel level cleared.");
  launchReady = true;
  console.log(`launchReady = ${launchReady}\n`);
} else {
  console.log("WARNING: Insufficient fuel!");
  launchReady = false;
  console.log(`launchReady = ${launchReady}\n`);
}

if (crewStatus && computerStatus === "green") {
  console.log("Crew & computer cleared.");
  crewReady = true;
  console.log(`crewReady =  ${crewReady}\n`);
} else {
  console.log("WARNING: Crew or computer not ready!");
  crewReady = false;
  console.log(`crewReady =  ${crewReady}\n`);
}

if (launchReady && crewReady) {
  console.log("10, 9, 8, 7, 6, 5, 4, 3, 2, 1...");
  console.log("Liftoff!");
} else {
  console.log("Launch scrubbed.");
}

switch (true) {
  // Case where 'crewStatus && computerStatus' are BOTH "green"
  case crewStatus && computerStatus === "green":
    // Log message 'Fuel level cleared.' to the console
    console.log("Crew & computer cleared.");
    // Set 'launchProper' to true
    crewReady = true;
    //  log boolean value
    console.log(launchReady);
    // Exit switch statement
    break;
  // Default case for when 'fuelLevel' is less than 20000
  default:
    // Log warning message to the console
    console.log("WARNING: Crew or computer not ready!");
    // Set 'launchProper' to false
    crewReady = false;
    //  log boolean value
    console.log(launchReady);
    // Exit switch statement
    break;
}

switch (true) {
  case launchReady && crewReady:
    console.log("10, 9, 8, 7, 6, 5, 4, 3, 2, 1...");
    console.log("Liftoff!");
    break;
  default:
    console.log("Launch scrubbed.");
    break;
}

console.log("crewReady = ", crewReady);
console.log(`crewReady = ${crewReady}`);
