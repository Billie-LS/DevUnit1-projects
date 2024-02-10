// baseline object 'launchcode'
let launchcode = {

    // key 'organization' value 'nonprofit'
	organization: 'nonprofit',
    // key 'executiveDirector' value 'Jeff'
	executiveDirector: 'Jeff',
    // key 'percentageCoolEmployees' value 100
	percentageCoolEmployees: 100,
    // key 'programsOffered' value is array of strings
	programsOffered: ['LC101', 'LaunchCode Women+', 'CodeCamp'],
    // key 'launchOutput' value function() parameter 'num'
	launchOutput: function (num) {
        // keys represent conditions values represent outputs
		let parts = {
			2: 'Launch', // Key 2 value 'Launch'
			3: 'Code',   // Key 3 value 'Code'
			5: 'Rocks'   // Key 5 value 'Rocks'
		};
        // empty string 'result' to store output
		let result = '';

        // Iterate each key (modulus) in 'parts' object
		for (let modulus in parts) {

            // Check input number divisible by modulus
			if (num % Number(modulus) === 0) {
                
                // If the modulus is 5 and 'result' is not empty, append a space before adding the part
				if (modulus == 5 && result.length > 0) { // divisible by 5 
					result += ' ';
				}
                // Append the corresponding launch output part based on the modulus to 'result'
				result += parts[modulus];
			}
		}
        // If no launch output parts were found, set 'result' to a default message
		if (result === '') {
			result = 'Bang!';
		} else {
            // Otherwise, append an exclamation mark to 'result'
			result += "!";
		}
        // If the result is specifically "Launch Rocks!", append a crash message
		if (result === 'Launch Rocks!') {
			result += ' (CRASH!!!!)';
		}
        // Return the final launch output
		return result;
	}
}

// Export the 'launchcode' object
module.exports = launchcode;