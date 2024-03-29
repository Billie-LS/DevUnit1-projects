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

if (astronautCount <= 7) {
  // Verify astronautCount does not exceed 7
  if (astronautStatus === "ready") {
    // verify astronautStatus is 'ready'
    console.log(`date: ${date}`);
    console.log(`time: ${time}`);
    console.log(`astronaut Count: ${astronautCount}`);
    console.log(`Crew Mass: ${crewMassKg} kg`);
    if (fuelLevel === "100%") {
      // Verify fuelLevel is at 100%
      console.log(`Fuel Mass: ${fuelMassKg} kg`);
      console.log(`Shuttle Mass: ${shuttleMassKg} kg`);
      console.log(`Total Mass: ${totalMassKg}`);
      if (fuelTempCelsius >= -300 && fuelTempCelsius <= -150) {
        // Verify fuel temperature in the required range
        // use escape sequence \u  symbol/character's unicode code point in hexadecimal degree celsius
        console.log(`Fuel Temperature: ${fuelTempCelsius} \u00B0C`);
        if (weatherStatus === "clear") {
          // Verify weatherStatus is 'clear'
          console.log(`Weather Status: ${weatherStatus}`);
          console.log(
            `\nEveryone here at Mission Control sends the ${astronautCount} of you best wishes for a safe and successful mission`
          );
          preparedForLiftOff = true;
        }
      }
    }
  }
} else {
  // note date and time of aborted mission / clock stop
  console.log(`date: ${date}`);
  console.log(`time: ${time}`);
  console.log(
    "Terminate count down.  \nConditions for safe mission have not been achieved!"
  );
  preparedForLiftOff = false;
}

// Verify shuttle may proceed with launch
if (astronautCount <= 7) {
  // Verify astronautCount does not exceed 7
  if (astronautStatus === "ready") {
    // Verify astronautStatus is 'ready'
    if (fuelLevel === "100%") {
      // Verify fuelLevel is at 100%
      if (fuelTempCelsius >= -300 && fuelTempCelsius <= -150) {
        // Verify fuel temperature in the required range
        if (weatherStatus === "clear") {
          // Verify weatherStatus is 'clear'
          preparedForLiftOff = true;
        }
      }
    }
  }
} else {
  // note date and time of aborted mission / clock stop
  preparedForLiftOff = false;
}

if (preparedForLiftOff === true) {
  console.log(
    "----------------------------------------------------------------"
  );
  console.log("All systems green. Initiating shuttle launch sequence.");
  console.log(
    "----------------------------------------------------------------"
  );
  console.log(`Date: ${date}`);
  console.log(`Time: ${time}`);
  console.log(`Crew Count: ${astronautCount}`);
  console.log(`Crew Mass: ${crewMassKg}`);
  console.log(`Fuel Mass: ${fuelMassKg}`);
  console.log(`Shuttle Mass: ${shuttleMassKg}`);
  console.log(`Total Mass: ${totalMassKg}`);
  console.log(`Fuel Temperature: ${fuelTempCelsius} \u00B0C`);
  console.log(`Weather Status: ${weatherStatus}`);
  console.log(
    `\nEveryone here at Mission Control sends the ${astronautCount} of you best wishes for a safe and successful mission`
  );
} else {
  console.log(
    "----------------------------------------------------------------"
  );
  console.log("Systems check failure.  Condition Red.");
  console.log(
    "----------------------------------------------------------------"
  );
  console.log(`Date: ${date}`);
  console.log(`Time: ${time}`);
  console.log(
    "Terminate count down.  \nConditions for safe mission have not been achieved!"
  );
}

// Verify shuttle may proceed with launch
if (astronautCount <= 7) {
  // Verify astronautCount does not exceed 7
  if (astronautStatus === "ready") {
    // Verify astronautStatus is 'ready'
    if (fuelLevel === "100%") {
      // Verify fuelLevel is at 100%
      if (fuelTempCelsius >= -300 && fuelTempCelsius <= -150) {
        // Verify fuel temperature in the required range
        if (weatherStatus === "clear") {
          // Verify weatherStatus is 'clear'
          preparedForLiftOff = true;
        }
      }
    }
  }
} else {
  // note date and time of aborted mission / clock stop
  preparedForLiftOff = false;
}

// Ternary operator used
preparedForLiftOff =
  astronautCount <= 7 &&
  astronautStatus === "ready" &&
  fuelLevel === "100%" &&
  fuelTempCelsius >= -300 &&
  fuelTempCelsius <= -150 &&
  weatherStatus === "clear"
    ? true
    : false;

preparedForLiftOff === true
  ? (console.log(
      "----------------------------------------------------------------"
    ),
    console.log("All systems green. Initiating shuttle launch sequence."),
    console.log(
      "----------------------------------------------------------------"
    ),
    console.log(`Date: ${date}`),
    console.log(`Time: ${time}`),
    console.log(`Crew Count: ${astronautCount}`),
    console.log(`Crew Mass: ${crewMassKg}`),
    console.log(`Fuel Mass: ${fuelMassKg}`),
    console.log(`Shuttle Mass: ${shuttleMassKg}`),
    console.log(`Total Mass: ${totalMassKg}`),
    console.log(`Fuel Temperature: ${fuelTempCelsius} \u00B0C`),
    console.log(`Weather Status: ${weatherStatus}`),
    console.log(
      `\nEveryone here at Mission Control sends the ${astronautCount} of you best wishes for a safe and successful mission`
    ))
  : (console.log(
      "----------------------------------------------------------------"
    ),
    console.log("Systems check failure.  Condition Red."),
    console.log(
      "----------------------------------------------------------------"
    ),
    console.log(`Date: ${date}`),
    console.log(`Time: ${time}`),
    console.log(
      "Terminate count down.  \nConditions for safe mission have not been achieved!"
    ));
