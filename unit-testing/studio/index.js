let twoThree = {
    divisors: [2, 3], 
    output: 'LaunchCode!' 
};

let twoFive = {
    divisors: [2, 5], 
    output: 'Launch Rocks! (CRASH!!!!)' 
};

let two = {
    divisors: [2], 
    output: 'Launch!' 
};

let three = {
    divisors: [3], 
    output: 'Code!' 
};

let five = {
    divisors: [5], 
    output: 'Rocks!' 
};

let launchcode = {
    organization: "nonprofit",
    executiveDirector: "Jeff",
    percentageCoolEmployees: 100,
    programsOffered: ['Web Development', 'Data Analysis', 'Liftoff'],
    launchOutput: function (num) {
        const conditions = [twoThree, twoFive, two, three, five];
    
        let output = ''; // empty string to store output
    
        // Iterate over each condition in the 'conditions' array
        for (let condition of conditions) {
            const { divisors, output: conditionOutput } = condition;
    
            // Check if the number 'num' satisfies all divisors in the current condition
            if (divisors.every(divisor => num % divisor === 0)) {
                // Return the corresponding output and exit the loop
                return conditionOutput;
            }
        }
    
        // Return the default message if no conditions match
        return 'Bang!';
    }
};

// Export the launchcode object for external use
module.exports = {launchcode};