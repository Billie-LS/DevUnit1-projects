// variable initialization
let date = ('Monday 2019-03-18');
let time = ('10:05:34 AM');
let astronautCount = parseFloat(7);
let astronautStatus = ('ready');
let averageAstronautMassKg = parseFloat(80.7);
let crewMassKg = parseFloat(astronautCount * averageAstronautMassKg);
let fuelMassKg = parseFloat(760000);
let shuttleMassKg = parseFloat(74842.31);  // shuttle mass in Kg
let totalMassKg = parseFloat(crewMassKg + fuelMassKg + shuttleMassKg); // total mass in Kg
let maximumMassLimit = parseFloat(850000); // maximum mass limit in Kg
let fuelTempCelsius = Number(-225);
let maximumFuelTemp = Number(-150);
let fuelLevel = ('100%');
let weatherStatus = ('clear');
let preparedForLiftOff = true; // boolean indicating 'go' or 'no-go'


// conditional logic to verify astronautCount for shuttle does not exceed 7

// add logic below to verify all astronauts are ready

// add logic below to verify the total mass does not exceed the maximum limit of 850000

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

// add logic below to verify the fuel level is at 100%

// add logic below to verify the weather status is clear

// Verify shuttle launch can proceed based on above conditions
