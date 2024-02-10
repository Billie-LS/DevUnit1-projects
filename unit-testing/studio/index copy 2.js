// Define the launchcode object with organization, executiveDirector, percentageCoolEmployees, programsOffered, and launchOutput properties
let launchcode = {
    // Set the organization property to "nonprofit"
    organization: "nonprofit",
    // Set the executiveDirector property to "Jeff"
    executiveDirector: "Jeff",
    // Set the percentageCoolEmployees property to 100
    percentageCoolEmployees: 100,
    // Set the programsOffered property to an array of program names
    programsOffered: ["LC101", "LaunchCode Women+", "CodeCamp"],
    // Define the launchOutput method with a parameter 'num'
    launchOutput: function (num) {
        // Define an object 'conditions' mapping divisors to corresponding launch outputs
        const conditions = {
            '2&3': 'LaunchCode!',  // output for numbers divisible by 2 and 3
            '2&5': 'Launch Rocks! (CRASH!!!!)',  // output for numbers divisible by 2 and 5
            '2': 'Launch!',  // output for numbers divisible by 2 only
            '3': 'Code!',    // output for numbers divisible by 3 only
            '5': 'Rocks!',   // output for numbers divisible by 5 only
        };

        let output = "";  // Initialize an empty string to store the output

        // Iterate over each condition in the 'conditions' object
        for (let condition in conditions) {
            // Split the condition string into divisors and convert them to numbers
            const divisors = condition.split('&').map(Number);

            // Check if the number 'num' satisfies all divisors in the current condition
            if (divisors.every(divisor => num % divisor === 0)) {
                // Concatenate the corresponding output to the 'output' string
                output += conditions[condition];
            }
        }

        // Return the concatenated output or the default message if no conditions match
        return output || "Rutabagas! That doesn't work.";
    }
};

// Export the launchcode object for external use
module.exports = launchcode;