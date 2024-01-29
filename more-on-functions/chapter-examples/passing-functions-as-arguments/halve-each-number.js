let nums = [3.14, 42, 4811];

// TODO: Write a mapping function

let halfNumber1 = function (num) {
    return num/2;
}
// and pass it to .map()
let halved1 = nums.map(halfNumber1);

console.log(halved1);


// TODO: Write it in fat-arrow notation

let halfNumber2 = num => num/2;

// and pass it to .map()
let halved2 = nums.map(halfNumber2);

console.log(halved2);