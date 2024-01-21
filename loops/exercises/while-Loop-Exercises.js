const input = require('readline-sync');
const prompt = require('prompt-sync')({ sigint: true });

//Define three variables for the LaunchCode shuttle - 
// the starting fuel level, 
// the number of astronauts aboard, 
// the altitude the shuttle reaches.

// define three variables for the LaunchCode shuttle -
let fuelLevel = 0, numAstronauts = 0, altitude = 0;

/*
Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. 
  Validate that the user enters a 
  positive integer value 
  greater than 5000 but less than 30000. 
*/

while (true) {  // Keep prompting the user until a valid input is received
  fuelLevel = input.question('Please enter a positive number for fuel level: ');

  // Convert the input to a number
  fuelLevel = Number(fuelLevel);

  // Check if the input is a positive integer between 5000 and 30000 (inclusive)
  if (Number.isInteger(fuelLevel) && fuelLevel > 5000 && fuelLevel < 30000) {
    break; // Break out of the loop if the input is valid
  } else {
    console.log('Invalid input. Please enter a positive integer between 5000 and 30000.');
  }
}

fuelLevel = 0; // reset the fuel level

while (fuelLevel <= 5000 || fuelLevel > 30000 || isNaN(fuelLevel)) {
  fuelLevel = input.question("Enter the starting fuel level: ");
}

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
while (numAstronauts <3 || numAstronauts >7 || isNaN(numAstronauts)) {
  numAstronauts = input.question("Enter the the number of astronauts onboard: ");
}  
  

//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.



/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
