/*
Generic for loop syntax
Initialization: Declare a variable and initialize it with a starting value.
Condition: Define the condition that determines whether the loop should continue. (i.e. boolean)
Increment/Decrement: Specify how the loop variable should change in each iteration.

for (initial expression; loop condition; update expression) {
   loop body
}

*/

// for (let i = 0; i < 10; i++) {
//   Code inside the loop block
//   console.log(i); // Output the current value of the loop variable
// }

// Output:
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

/*
Experiment with loop below by modifying each of the following: 
the variable initialization, 
the boolean condition, 
and the update expression.
*/

// Declare a variable 'i' and initialize it to 0.
// The loop will start from the value assigned to 'i'.
for (let i = 0; i < 51; i++) {
  // let i = 0; initializes a variable i to initial value to 0. The loop start point.
  // i < 51; sets condition for loop to continue or not. If i is less than 51, loop continues running.
  // i++ the increment statement (i.e. counter). Increases value of i by 1 with each iteration.
  console.log(i);  
  // Log (i.e. outputs) the current value of 'i' to the console with each iteration.
   // Increment the value of 'i' by 1 in each iteration.
   // The loop will continue as long as 'i' is less than 51.
 }

// Output:
// 0
// 1
// 2
// ...
// 50