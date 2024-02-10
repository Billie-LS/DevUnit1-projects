// baseline object 'launchcode'
let launchcode = {

    // key 'organization' value 'nonprofit'
	organization: "nonprofit",
    // key 'executiveDirector' value 'Jeff'
	executiveDirector: "Jeff",
    // key 'percentageCoolEmployees' value 100
	percentageCoolEmployees: 100,
    // key 'programsOffered' value is array of strings
	programsOffered: ["LC101", "LaunchCode Women+", "CodeCamp"],
    // key 'launchOutput' value function() parameter 'num'
	launchOutput: function (num) {
        // keys represent conditions values represent outputs
		let parts = {
			2: "Launch", // Key 2 represents launch
			3: "Code",   // Key 3 represents code
			5: "Rocks"   // Key 5 represents rocks
		};
        // Initialize an empty string 'result' to store the final launch output
		let result = "";
        // Iterate through each key (modulus) in the 'parts' object
		for (let modulus in parts) {
            // Check if the input number is divisible by the current modulus
			if (num % Number(modulus) === 0) {
                // If the modulus is 5 and 'result' is not empty, append a space before adding the part
				if (modulus == 5 && result.length > 0) {
					result += " ";
				}
                // Append the corresponding launch output part based on the modulus to 'result'
				result += parts[modulus];
			}
		}
        // If no launch output parts were found, set 'result' to a default message
		if (result === "") {
			result = "Rutabagas! That doesn't work.";
		} else {
            // Otherwise, append an exclamation mark to 'result'
			result += "!";
		}
        // If the result is specifically "Launch Rocks!", append a crash message
		if (result === "Launch Rocks!") {
			result += " (CRASH!!!!)";
		}
        // Return the final launch output
		return result;
	}
}

// Export the 'launchcode' object
module.exports = launchcode;