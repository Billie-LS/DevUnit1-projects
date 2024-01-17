const input = require('readline-sync');
const prompt = require('prompt-sync')({ sigint: true });

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodCabinet = (food.split(",").sort()); // [ 'chocolate', 'meal packs', 'snacks', 'water bottles' ]

let equipmentCabinet = (equipment.split(",").sort()); // [ 'jet packs', 'space suits', 'thermal detonators', 'tool belts' ]

let petsCabinet = (pets.split(",").sort()); // [ 'alien eggs', 'cats', 'moose', 'parrots' ]

let sleepAidsCabinet = (sleepAids.split(",").sort()); // [ 'alarm clocks', 'blankets', 'eyepatches', 'pillows' ]

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [];
// cargoHold = cargoHold.concat(foodCabinet, equipmentCabinet, petsCabinet, sleepAidsCabinet);  // gives single array
cargoHold.push(foodCabinet, equipmentCabinet, petsCabinet, sleepAidsCabinet);
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
// a. using readline-sync
// let cabinetSelectInput = Number(input.question('Choose a number from 0 to 3 to indicate which cabinet to access: '));
// console.log(typeof(sliceCount));  // number

// b. using prompt-sync
// let cabinetSelectPrompt = Number(prompt('Choose a number from 0 to 3 to indicate which cabinet to access: '));
// console.log(typeof(userPromptInput));  // number

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
// console.log(`The contents of the cabinet selected are: ${cargoHold[cabinetSelectInput]}.`)
// console.log(`The contents of the cabinet selected are: ${cargoHold[cabinetSelectPrompt]}.`)

/*
5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. 
    Use the 'includes' method to check if the cabinet contains the selected item, 
    then print “Cabinet ____ DOES/DOES NOT contain ____.”
*/
// let cabinetSelectInputB = Number(input.question('Choose a number from 0 to 3 to indicate which cabinet to access: '));
// if (cabinetSelectInputB <= 3 && cabinetSelectInputB >= 0){
//     console.log(`The contents of the cabinet you selected are: \n\t${cargoHold[cabinetSelectInputB]}.`);
//     let cabinetSelectInputC = input.question(`Please enter the item name you want from cabinet ${cargoHold[cabinetSelectInputB]}: `);
//     if (cargoHold[cabinetSelectInputB].includes(cabinetSelectInputC)){
//         console.log(`Cabinet ${cabinetSelectInputB} DOES contain ${cabinetSelectInputC}.`);
//     }
// }else{
//     console.log(`Cabinet ${cargoHold[cabinetSelectInputB]} DOES/DOES NOT contain ${cabinetSelectInputC}.`);
// }
// console.log(`The contents of the cabinet you selected are: ${cargoHold[cabinetSelectInputB]} `);
// let cabinetSelectInputC = Number(input.question(`Please enter the item name of the item you want from cabinet ${cabinetSelectInputB}: `));

// let cabinetSelectInputB = Number(input.question('Choose a number from 0 to 3 to indicate which cabinet to access: '));

// if (cabinetSelectInputB <= 3 && cabinetSelectInputB >= 0) {
//     console.log(`The contents of the cabinet you selected are: \n\t${cargoHold[cabinetSelectInputB]}.`);
//     let cabinetSelectInputC = input.question(`Please enter the item name you want from cabinet ${cabinetSelectInputB}: `);

//     if (cargoHold[cabinetSelectInputB].includes(cabinetSelectInputC)) {
//         console.log(`Cabinet ${cabinetSelectInputB} DOES contain ${cabinetSelectInputC}.`);
//     } else {
//         console.log(`Cabinet ${cabinetSelectInputB} DOES NOT contain ${cabinetSelectInputC}.`);
//     }
// } else {
//     console.log(`Invalid cabinet selection. Please choose a number between 0 and 3.`);
// }

// using 'switch' instead
let cabinetSelectInputB = Number(input.question('Choose a number from 0 to 3 to indicate which cabinet to access: '));

// Using switch for different cases of cabinetSelectInputB
switch (cabinetSelectInputB) {
    // Cases for valid cabinet numbers (0, 1, 2, 3)
    case 0:
    case 1:
    case 2:
    case 3:
        // Display contents of selected cabinet
        console.log(`The contents of the cabinet you selected are: \n\t${cargoHold[cabinetSelectInputB]}.`);
        
        // Prompt the user input item name they want from cabinet
        let cabinetSelectInputC = input.question(`Please enter the item name you want from cabinet ${cabinetSelectInputB}: `);

        // Check if the selected cabinet contains the specified item
        if (cargoHold[cabinetSelectInputB].includes(cabinetSelectInputC)) {
            console.log(`Cabinet ${cabinetSelectInputB} DOES contain ${cabinetSelectInputC}.`);
        } else {
            console.log(`Cabinet ${cabinetSelectInputB} DOES NOT contain ${cabinetSelectInputC}.`);
        }
        break;

    // Default case for invalid cabinet numbers
    default:
        console.log(`Invalid cabinet selection. Please choose a number between 0 and 3.`);
        break;
}