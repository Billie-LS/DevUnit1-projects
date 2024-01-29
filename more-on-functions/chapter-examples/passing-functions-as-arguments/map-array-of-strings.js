let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];


// TODO: Write a mapping function
let firstLetter1a = function (names) {
    return names[0];
};

// and pass it to .map()
let firstInitials1a = names.map(firstLetter1a);
console.log(firstInitials1a);

// TODO: Write it in fat-arrow notation
let firstLetter1b = names => names[0];

// and pass it to .map()
let firstInitials1b = names.map(firstLetter1b);
console.log(firstInitials1b);


// TODO: Write a mapping function
let firstLetter2a = function (names) {
    return names.charAt(0);
};

// and pass it to .map()
let firstInitials2a = names.map(firstLetter2a);
console.log(firstInitials2a);

// TODO: Write it in fat-arrow notation
let firstLetter2b = names => names.charAt(0); 

// and pass it to .map()
let firstInitials2b = names.map(firstLetter2b);
console.log(firstInitials2b);


// TODO: Write a mapping function
let firstLetter3a = function(names) {
    return names[0];
};

// and pass it to .map()
let firstInitials3a = names.map(firstLetter3a);
console.log(firstInitials3a);

// TODO: Write it in fat-arrow notation
let firstLetter3b = names => names[0];

// and pass it to .map()
let firstInitials3b = names.map(firstLetter3b);
console.log(firstInitials3b);


// TODO: Write a mapping function
let firstLetter4a = function ([v]) {
    return v;
}

// and pass it to .map()
let firstInitials4a = names.map(firstLetter4a);
console.log(firstInitials4a);

// TODO: Write it in fat-arrow notation
let firstLetter4b = ([v])=> v ;

// and pass it to .map()
let firstInitials4b = names.map(firstLetter4b);
console.log(firstInitials4b);


// TODO: Write a mapping function
// Approach using substring method
let firstLetter5a = function (names) {
    return names.substring(0, 1);
}

// and pass it to .map()
let firstInitials5a = names.map(firstLetter5a);
console.log(firstInitials5a);

// TODO: Write it in fat-arrow notation
// Approach using substring method
let firstLetter5b = name => name.substring(0, 1);

// and pass it to .map()
let firstInitials5b = names.map(firstLetter5b);
console.log(firstInitials5b);
