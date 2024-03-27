// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "time	10:05:34 AM";
let astronautCount = parseFloat(7);
let astronautStatus = "ready";
let averageAstronautMassKg = parseFloat(80.7);
let crewMassKg = parseFloat(astronautCount * averageAstronautMassKg);
let fuelMassKg = parseFloat(760000);
let shuttleMassKg = parseFloat(74842.31);
let totalMassKg = parseFloat(crewMassKg + fuelMassKg + shuttleMassKg);
let maximumMassLimit = parseFloat(850000);
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) {
}

// add logic below to verify all astronauts are ready
if (astronautStatus === "ready") {
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg < maximumMassLimit || totalMassKg < 85000) {
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius >= -300 && fuelTempCelsius <= -150) {
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel === "100%") {
}
// add logic below to verify the weather status is clear
if (weatherStatus === "clear") {
}
// Verify shuttle launch can proceed based on above conditions
