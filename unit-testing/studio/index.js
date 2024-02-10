launchOutput: function (num) {
    const conditions = [
        { divisors: [2, 3], 
            output: 'LaunchCode!' // output for numbers divisible by 2 and 3
        },    
        { divisors: [2, 5], 
            output: 'Launch Rocks! (CRASH!!!!)' // output for numbers divisible by 2 and 5
        },    
        { divisors: [2], 
            output: 'Launch!' // output for numbers divisible by 2 only
        },   
        { divisors: [3], 
            output: 'Code!' // output for numbers divisible by 3 only
        },     
        { divisors: [5], 
            output: 'Rocks!' // output for numbers divisible by 5 only
        },    
    ];

    let output = '';  // Initialize an empty string to store the output

    // Iterate over each condition in the 'conditions' array
    for (let condition of conditions) {
        const { divisors, output: conditionOutput } = condition;

        // Check if the number 'num' satisfies all divisors in the current condition
        if (divisors.every(divisor => num % divisor === 0)) {
            // Concatenate the corresponding output to the 'output' string
            output = conditionOutput; // Reset output instead of concatenating
        }
    }

    // Return the output or the default message if no conditions match
    return output || 'Bang!';
}

// Export the launchcode object for external use
module.exports = {launchcode};