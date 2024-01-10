let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;

// 3) Write conditional expressions to satisfy the following safety rules:

// a) If crewStatus is true, print "Crew Ready" else print "Crew Not Ready".

// crewStatus = (spaceSuitsOn && shuttleCabinReady)
if (crewStatus) {  // so, is crewStatus true + true = true
    console.log('Crew Ready');
 } else{
    console.log('Crew Not Ready');
 }
 
/* b)
If computerStatusCode is 200, print "Please stand by. Computer is rebooting." 
Else if computerStatusCode is 400, print "Success! Computer online." 
Else print "ALERT: Computer offline!"
*/
// computerStatusCode = 200
if (computerStatusCode === 200) {  // true
    console.log('Please stand by. Computer is rebooting.');
 } else if (computerStatusCode === 400){
    console.log('Success! Computer online.');
 } else {
    console.log('ALERT: Computer offline!');
 }
 

/* c) 
If shuttleSpeed is > 17,500, print "ALERT: Escape velocity reached!" 
Else if shuttleSpeed is < 8000, print "ALERT: Cannot maintain orbit!" 
Else print "Stable speed".
*/
// shuttleSpeed = 15000
if (shuttleSpeed > 17500) {  // false
    console.log('ALERT: Escape velocity reached!');
 } else if (shuttleSpeed < 8000){  // false
    console.log('ALERT: Cannot maintain orbit!');
 } else {
    console.log('Stable speed');
 }

// 4) PREDICT: Do the code blocks shown in the 'predict.txt' file produce the same result?


if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
    console.log("all systems go");
 } else {
    console.log("WARNING. Not ready");
 }
 
 if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
    console.log("WARNING. Not ready");
 } else {
    console.log("all systems go");
 }

console.log("Yes");
