//1) Create a function with an array of numbers as its parameter. 
// The function should iterate through the array and return the minimum value from the array. 
// Hint: Use what you know about if statements to identify and store the smallest value within the array.

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Using one of the test arrays as the argument, call your function inside the console.log statement below.

function findMinValue(arr) {
    // set first element as smallest
    let minValue = arr[0]; 
    if (arr.length === 0) {
        // Return undefined for an empty array
        return undefined; 
    }
    // Iterate through the array to find the minimum value
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            // Update minValue for found smaller value
            minValue = arr[i]; 
        }
    }
    return minValue;
}

console.log(findMinValue(nums1));


function findMinValueRecursive(arr, index = 0) {
    if (index === arr.length) {
        // Base case: when index reaches the end of the array
        return undefined; // Return undefined for an empty array
    }

    // Recursive case: find the minimum value in the rest of the array
    const minValueRest = findMinValueRecursive(arr, index + 1);

    // Compare the current element with the minimum value in the rest of the array
    return (minValueRest === undefined || arr[index] < minValueRest) ? arr[index] : minValueRest;
}

// Using one of the test arrays as the argument
console.log(findMinValueRecursive(nums1)); 