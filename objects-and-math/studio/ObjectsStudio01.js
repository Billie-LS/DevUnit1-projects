// TODO: Code your selectRandomEntry function here:


// let idNumbers = [291, 414, 503, 599, 796, 890];

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

// TODO: Code your buildCrewArray function here:

// function buildCrewArray takes candidates and 
// numEntries (number of entries/candidates to select for the crew array)
function buildCrewArray(candidates, numEntries) {
  // empty array for selected crew members
  const crewArray = [];

  // while loop selecting candidates until number of entries reached
  while (crewArray.length < numEntries) {
    // Call selectRandomEntry function to get a random candidate
    const selectedCandidate = selectRandomEntry(candidates);

    // Check selected candidate's ID is not already in crewArray
    if (!crewArray.some(member => member.astronautID === selectedCandidate.astronautID)) {
      // Add selected candidate to the crewArray
      crewArray.push(selectedCandidate);
    }
  }
  // Return the completed array of selected crew members
  return crewArray;
}


let idNumbers = [291, 414, 503, 599, 796, 890];

// Here are the candidates and the 'animals' array:
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



let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// TODO: check
let crew = buildCrewArray(animals, 3);

// Display the selected crew members
console.log(crew);

// TODO: Use a template literal to print, '____, ____, and ____ are going to space!' 
// Fill in the blanks with the names of the selected animals.
// Code your template literal and console.log statements:

// Print the message using a template literal
console.log(`${crew[0].name}, ${crew[1].name}, and ${crew[2].name} are going to space!`);

// destructuring to extract names of selected crew 
const [firstAnimal, secondAnimal, thirdAnimal] = crew;

// Print the message using a template literal
console.log(`${firstAnimal.name}, ${secondAnimal.name}, and ${thirdAnimal.name} are going to space!`);


