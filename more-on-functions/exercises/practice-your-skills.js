//Create an anonymous function and set it equal to a variable.

/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/
let practice = function(myArg) {
    if (typeof myArg === "number") {
       return myArg * 3;}
    if (typeof myArg === "string"){
        return "ARRR!";}
    return myArg;
}
// c) Be sure to test your function before moving on the next part.
console.log(practice(['stuff']));

/* Add to your code! Use your function and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ['Elocution', 21, 'Clean teeth', 100];

let changeArr = arr.map(practice);

console.log(changeArr);
