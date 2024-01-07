console.log("Coding Rocks");
// For the following steps, the value of x1 begins at 3. The value of y1 begins at 5.
let x1 = 3;
let y1 = 5;

// Step 1
// Add 1 to x1 and add 2 to y1.
x1 += 1;
y1 += 2;

// Step 2
// If x1 is greater than y1, add 3 to x1.
if (x1 > y1) {
  x1 += 3;
}

// Step 3
// If x1 is not greater than y1, add 4 to y1.
if (!(x1 > y1)) {
  y1 += 4;
}

// Calculating the resulting value of x1 + y1?
let result1 = x1 + y1;

console.log(result1); // Output the result


// For the following steps, the value of x begins at 2, and the value of y begins at 8.
let x2 = 2;
let y2 = 8;

// Step 1
// Add 1 to x2, and subtract 2 from y2.
x2 += 1;
y2 -= 2;

// Step 2
// If x2 < y2, add 2 to x2, and subtract 1 from y2.
// Otherwise, add 3 to x2, and add 2 to y2.
for (let i = 0; i < 3; i++) {
  if (x2 < y2) {
    x2 += 2;
    y2 -= 1;
  } else {
    x2 += 3;
    y2 += 2;
  }
}

// Step 4
// Let z = x2 * y2.
let z = x2 * y2;

console.log(z); // Output the result



let x = 0;
let y = 0;
let direction = "east"; // Initially facing east

// Function to move forward
function moveForward(steps) {
  switch (direction) {
    case "east":
      x += steps;
      break;
    case "west":
      x -= steps;
      break;
    case "north":
      y += steps;
      break;
    case "south":
      y -= steps;
      break;
  }
}

// Perform the walk
// Turn left and move forward 10 steps
direction = "north";
moveForward(10);

// Turn right and move forward 8 steps
direction = "east";
moveForward(8);

// Turn right and move forward 5 steps
direction = "south";
moveForward(5);

// Turn left and move forward 12 steps
direction = "east";
moveForward(12);

// Output the final position
console.log(`Final Position: (${x}, ${y})`);


let day = "Thursday";
day = 32.5;
day = 19;
console.log(day);

console.log(1 + 5 % 3);
console.log(2 ** 2 ** 3 * 3)
console.log(16 - 2 * 5 / 3 + 1)

const input = require('readline-sync');

let info = input.question("Please enter your age: ");
//The user enters 25.

console.log(typeof info);