const input = require('readline-sync');

// TODO: Code your orbitCircumference function here (note- circumference = orbit):  

// function orbitCircumference takes parameter radius
function orbitCircumference(radius) {
  // Calculate circumference formula C = 2πr and round to nearest integer
  const circumference = Math.round(2 * Math.PI * radius);

  // Return circumference integer
  return circumference;
}

console.log(orbitCircumference(2000));

// variable orbitRadius initialize to 2000 (in km)
const orbitRadius = 2000;

// Call orbitCircumference with orbitRadius as argument
const orbitCircumferenceValue = orbitCircumference(orbitRadius);


// TODO: Code missionDuration function to take three parameters - number orbits completed, orbit radius, and orbital speed. 
// Set default radius to 2000 km and default orbital speed to 28000 km/hr.
function missionDuration(orbitsComplete, orbitRadius, orbitSpeed){
  // Set default values orbitRadius and orbitSpeed
  // orbitRadius = orbitRadius || 2000;
  // orbitSpeed = orbitSpeed || 28000;

  // Get user input for orbitRadius, use default if not provided
  let orbitRadiusInput = input.question('Enter orbit radius (default is 2000): ');
  orbitRadius = parseInt(orbitRadiusInput) || 2000;

  // Get user input for orbitSpeed, use default if not provided
  let orbitSpeedInput = input.question('Enter orbital speed (default is 28000): ');
  orbitSpeed = parseInt(orbitSpeedInput) || 28000;

  const distance = orbitsComplete * orbitCircumferenceValue;
  // const distance = orbitsComplete * orbitCircumference(radius);
  const duration = Number((distance / orbitSpeed).toFixed(2));
  return duration;
}

console.log(missionDuration(5))

// TODO: print, 'The mission will travel ____ km around the planet, and it will take ____ hours to complete.'

console.log(`The mission will travel ${orbitCircumferenceValue * 5} km around the planet, and it will take ${missionDuration(5)} hours to complete.`) 




// TODO: Copy/paste your selectRandomEntry function here:
// function selectRandomEntry takes candidates as parameter
function selectRandomEntry(candidates) {
  // Get random index between 0 and < idNumbers array length
  const randomIndex = Math.floor(Math.random() * idNumbers.length);

  // Get random ID number from idNumbers array using random index
  const randomIdNumber = idNumbers[randomIndex];

  // Find candidate in candidates array with selected ID number
  const selectedCandidate = candidates.find(candidate => candidate.astronautID === randomIdNumber);

  // Return selected candidate
  return selectedCandidate;
}


// Code your oxygenExpended function here:


// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 