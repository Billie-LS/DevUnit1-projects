// baseline object 'launchcode'
let launchcode = {
    // key 'organization' value 'nonprofit'
    organization: 'nonprofit',
    // key 'executiveDirector' value 'Jeff'
    executiveDirector: 'Jeff',
    // key 'percentageCoolEmployees' value 100
    percentageCoolEmployees: 100,
    // key 'programsOffered' value is array of strings
    programsOffered: ['Web Development', 'Data Analysis', 'Liftoff'],
    // key 'launchOutput' value function() parameter 'num'
    launchOutput: function(num) {
        // object keys represent conditions values represent outputs
        const conditions = {
            '2&3': 'LaunchCode!', // divisible by 2 and 3
            '2&5': 'Launch Rocks! (CRASH!!!!)', // divisible by 2 and 5
            '2': 'Launch!', // divisible by 2 only
            '3': 'Code!', // divisible by 3 only
            '5': 'Rocks!', // divisible by 5 only
        };

        // Check for specific conditions first
        if (num % 2 === 0 && num % 3 === 0) { // divisible by 2 and 3
            return conditions['2&3']; // Return 'LaunchCode!'
        } else if (num % 2 === 0 && num % 5 === 0) { // divisible by 2 and 5
            return conditions['2&5']; // Return 'Launch Rocks! (CRASH!!!!)'
        }

        // Check other conditions
        let output = ''; // Initialize an empty string to store the output
        // Loop through each condition in the 'conditions' object
        for (let condition in conditions) {
            // Split the condition string to extract divisors and convert them to numbers
            const divisors = condition.split('&').map(Number);
            // Check if the number satisfies each condition by ensuring it's divisible by all divisors
            if (divisors.every(divisor => num % divisor === 0)) {
                output += conditions[condition]; // Append the corresponding output to the output string
            }
        }

        // Return the output if it's not empty; otherwise, return 'Bang!' as the default output
        return output || 'Bang!';
    }
};

// Export the 'launchcode' object
module.exports = { launchcode };

// let launchcode = {
//     organization: "nonprofit",
//     executiveDirector: "Jeff",
//     percentageCoolEmployees: 100,
//     programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
//     launchOutput: function(num) {
//         if (num % 2 === 0 && num % 3 === 0) {
//             return 'LaunchCode!';
//         }
//         if (num % 2 === 0 && num % 5 === 0) {
//             return 'Launch Rocks! (CRASH!!!!)';
//         }
//         if (num % 2 === 0) {
//             return 'Launch!';
//         }
//         if (num % 3 === 0) {
//             return 'Code!';
//         }
//         if (num % 5 === 0) {
//             return 'Rocks!';
//         }
//         return 'Bang!';
//     }
// };


// module.exports = { launchcode };