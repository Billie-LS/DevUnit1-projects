// multi-dimensional arrays
let shuttleCrews = [
    ['Robert Gibson', 'Mark Lee', 'Mae Jemison'],
    ['Kent Rominger', 'Ellen Ochoa', 'Bernard Harris'],
    ['Eilen Collins', 'Winston Scott',  'Catherin Coleman']
];

console.log(shuttleCrews[0][2]);  // Mae Jemison
console.log(shuttleCrews[1][1]);  // Ellen Ochoa
console.log(shuttleCrews[2][1]);  // Winston Scott

let shuttleCrews1 = [
    ['Robert Gibson', 'Mark Lee', 'Mae Jemison'],
    ['Kent Rominger', 'Ellen Ochoa', 'Bernard Harris'],
    ['Eilen Collins', 'Winston Scott',  'Catherin Coleman']
];

let newCrew = ['Mark Polansky', 'Robert Curbeam', 'Joan Higginbotham'];

// Add a new crew array to the end of shuttleCrews
shuttleCrews1.push(newCrew);
/*
[
    ['Robert Gibson', 'Mark Lee', 'Mae Jemison'],
    ['Kent Rominger', 'Ellen Ochoa', 'Bernard Harris'],
    ['Eilen Collins', 'Winston Scott',  'Catherin Coleman'],
    ['Mark Polansky', 'Robert Curbeam', 'Joan Higginbotham']
];
*/
console.log(shuttleCrews1[3][2]);  // Robert Curbeam

// Reverse the order of the crew at index 1
shuttleCrews1[1].reverse();
/*
[
    ['Robert Gibson', 'Mark Lee', 'Mae Jemison'],
    ['Bernard Harris', 'Ellen Ochoa', 'Kent Rominger'],
    ['Eilen Collins', 'Winston Scott',  'Catherin Coleman'],
    ['Mark Polansky', 'Robert Curbeam', 'Joan Higginbotham']
];
*/
console.log(shuttleCrews1[1]);

// test understand
let school = [
    ["science", "computer", "art"],
    ["Jones", "Willoughby", "Rhodes"]
];
console.log(school[1][0]); // Jones
console.log(school[0].push("dance"));  // 4
console.log(school[0]);  // ["science", "computer", "art", "dance"]
console.log(school[0].unshift("dance"));  // 5
console.log(school[0]);  // ["dance", "science", "computer", "art", "dance"]

console.log(school[1].push("Holmes"));  // 4
console.log(school[1]);  // ["science", "computer", "art", "dance"]
console.log(school[1].unshift("Holmes"));  // 5
console.log(school[1]);  // ["dance", "science", "computer", "art", "dance"]