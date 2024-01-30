//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.
// Function to sort in ascending order
function sortAsc(arr) {
    return arr.slice().sort((a, b) => a - b);
}

//Sort each array in descending order.
// Function to sort in descending order
function sortDesc(arr) {
    return arr.slice().sort((a, b) => b - a);
}

// Test the functions
console.log("Ascending Order:");
console.log("nums1:", sortAsc(nums1));
console.log("nums2:", sortAsc(nums2));
console.log("nums3:", sortAsc(nums3));

console.log("\nDescending Order:");
console.log("nums1:", sortDesc(nums1));
console.log("nums2:", sortDesc(nums2));
console.log("nums3:", sortDesc(nums3));