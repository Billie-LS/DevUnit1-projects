let launchcode = {
    organization: "nonprofit",
    executiveDirector: "Jeff",
    percentageCoolEmployees: 100,
    programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
    launchOutput: function(num) {
        // Define an object where keys represent conditions and values represent outputs
        const conditions = {
            '2': 'Launch!',
            '3': 'Code!',
            '5': 'Rocks!',
            '2&3': 'LaunchCode!',
            '2&5': 'Launch Rocks! (CRASH!!!!)'
        };

        // Initialize an empty string to store the output
        let output = '';

        // Loop through each condition in the conditions object
        for (let condition in conditions) {
            // Split the condition string to extract divisors
            const divisors = condition.split('&').map(Number);

            // Check if the number satisfies each condition by ensuring it's divisible by all divisors
            const satisfiesCondition = divisors.every(divisor => num % divisor === 0);

            // If the condition is satisfied, append the corresponding output to the output string
            if (satisfiesCondition) {
                output += conditions[condition];
            }
        }

        // Return the output if it's not empty; otherwise, return 'Bang!' as the default output
        return output || 'Bang!';
    }
};

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