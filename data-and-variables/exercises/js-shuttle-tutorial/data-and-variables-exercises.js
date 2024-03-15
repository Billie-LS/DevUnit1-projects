// Declare and assign the variables below
let shuttleName = "Determination";
let shuttleSpeedMph = 17500;
let marsDistanceKm = 225000000;
let moonsDistanceKm = 384400;
let milesPerKm = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName);
console.log(typeof shuttleSpeedMph);
console.log(typeof marsDistanceKm);
console.log(typeof moonsDistanceKm);
console.log(typeof milesPerKm);

// Calculate a space mission below

// calculate miles to Mars
let marsDistanceMiles = marsDistanceKm * milesPerKm;
// calculate travel time in hours to Mars
let timeToMarsHours = marsDistanceMiles / shuttleSpeedMph;
// calculate travel time in days to Mars
let timeToMarsDays = timeToMarsHours / 24;

// Print the results of the space mission calculations below
console.log(
  shuttleName + " will take " + timeToMarsDays + " days to reach Mars."
);

console.log(`${shuttleName} will take ${timeToMarsDays} days to reach Mars.`);

// Calculate a trip to the moon below
// calculate miles to Moon
let moonDistanceMiles = moonsDistanceKm * milesPerKm;
// calculate travel time in hours to Mars
let timeToMoonHours = moonDistanceMiles / shuttleSpeedMph;
// calculate travel time in days to Mars
let timeToMoonDays = timeToMoonHours / 24;

// Print the results of the trip to the moon below
console.log(
  shuttleName + " will take " + timeToMoonDays + " days to reach Moon."
);

console.log("Coding Rocks");

console.log(`${shuttleName} will take ${timeToMoonDays} days to reach Moon.`);
