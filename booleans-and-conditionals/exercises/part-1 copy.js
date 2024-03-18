// Declare and initialize the variables for exercise 1 here:

let engineIndicatorLight = 'red blinking';
let spaceSuitsOn = true;
shuttleCabinReady = true;
crewStatus = (spaceSuitsOn && shuttleCabinReady);
computerStatusCode = 200
shuttleSpeed = 15000;

// BEFORE running the code, predict what will be printed to the console by the following statements:

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}

// crewStatus = (spaceSuitsOn && shuttleCabinReady)
if (crewStatus) {  // so, is crewStatus true + true = true
   console.log('Crew Ready');
} else{
   console.log('Crew Not Ready');
}


// computerStatusCode = 200
if (computerStatusCode === 200) {  // true
   console.log('Please stand by. Computer is rebooting.');
} else if (computerStatusCode === 400){
   console.log('Success! Computer online.');
} else {
   console.log('ALERT: Computer offline!');
}


// shuttleSpeed = 15000
if (shuttleSpeed > 17500) {  // false
   console.log('ALERT: Escape velocity reached!');
} else if (shuttleSpeed < 8000){  // false
   console.log('ALERT: Cannot maintain orbit!');
} else {
   console.log('Stable speed');
}

if (crewStatus && (computerStatusCode === 200) && spaceSuitsOn) {
   console.log("all systems go");
} else {
   console.log("WARNING. Not ready");
}

if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
   console.log("WARNING. Not ready");
} else {
   console.log("all systems go");
}