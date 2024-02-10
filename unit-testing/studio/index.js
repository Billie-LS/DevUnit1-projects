const two = {
    divisors: [2], 
    output: 'Launch!' 
};

const three = {
    divisors: [3], 
    output: 'Code!' 
};

const five = {
    divisors: [5], 
    output: 'Rocks!' 
};

const twoThree = {
    divisors: [2, 3], 
    output: 'LaunchCode!' 
};

const twoFive = {
    divisors: [2, 5], 
    output: 'Launch Rocks! (CRASH!!!!)' 
};


let launchcode = {
    organization: "nonprofit",
    executiveDirector: "Jeff",
    percentageCoolEmployees: 100,
    programsOffered: ['Web Development', 'Data Analysis', 'Liftoff'],
    launchOutput: function (num) {
        let conditions = [twoThree, twoFive, two, three, five];
    
        let output = ''; // empty string to store output
    
        // iterate each condition in 'conditions' array
        for (let condition of conditions) {
            const { divisors, output: conditionOutput } = condition;
    
            // check 'num' satisfies all divisors in current condition
            if (divisors.every(divisor => num % divisor === 0)) {
                // return corresponding output, exit loop
                return conditionOutput;
            }
        }
    
        // Return the default message if no conditions match
        return 'Bang!';
    }
};

// Export the launchcode object for external use
module.exports = {launchcode};