// the built-in object console
// using typeof operator to determine the data type of console
console.log(typeof console);

// Every string has a length property, which is an integer.
let firstName = "Grace";
let lastName = "Hopper";
// using the .length property to determine the length
console.log(firstName, "has", firstName.length, "characters");
console.log(lastName, "has", lastName.length, "characters");

// using methods
let nonprofit = "LaunchCode";
// using the .toLowerCase() method 
console.log(nonprofit.toLowerCase());
console.log(nonprofit);

// test understanding
cityName = "Vienna";
console.log(cityName.length);  // 6

stateName = "Virginia";
console.log(stateName.length);  // 8

console.log(", ".length);  // 2

location = cityName + ", " +  stateName;
console.log(location.length);  // 16
