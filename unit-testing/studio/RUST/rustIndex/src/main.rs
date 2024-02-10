// Define a struct named LaunchCode
pub struct LaunchCode {
    // Define fields for LaunchCode struct
    organization: &'static str,       // Represents the organization name
    executive_director: &'static str, // Represents the executive director's name
    percentage_cool_employees: u32,   // Represents the percentage of cool employees
    programs_offered: Vec<&'static str>, // Represents the programs offered by LaunchCode
}

// Implement a method for the LaunchCode struct
impl LaunchCode {
    // Define a method named launch_output which takes a number as input
    pub fn launch_output(&self, num: u32) -> String {
        // Define conditions and their corresponding outputs
        let conditions = vec![
            (vec![2, 3], "LaunchCode!"),
            (vec![2, 5], "Launch Rocks! (CRASH!!!!)"),
            (vec![2], "Launch!"),
            (vec![3], "Code!"),
            (vec![5], "Rocks!"),
        ];

        // Check for specific conditions first
        if num % 2 == 0 && num % 3 == 0 {
            return String::from("LaunchCode!"); // Return 'LaunchCode!'
        }
        if num % 2 == 0 && num % 5 == 0 {
            return String::from("Launch Rocks! (CRASH!!!!)"); // Return 'Launch Rocks! (CRASH!!!!)'
        }

        // Check other conditions
        for (divisors, output) in &conditions {
            // Check if the number satisfies each condition by ensuring it's divisible by all divisors
            if divisors.iter().all(|&divisor| num % divisor == 0) {
                return output.to_string(); // Return the corresponding output
            }
        }

        // Return 'Bang!' if no conditions match
        String::from("Bang!")
    }
}

fn main() {
    // Create a LaunchCode instance
    let launch_code = LaunchCode {
        organization: "nonprofit",
        executive_director: "Jeff",
        percentage_cool_employees: 100,
        programs_offered: vec!["Web Development", "Data Analysis", "Liftoff"],
    };

    // Call the launch_output method with a test number
    let result = launch_code.launch_output(6);
    println!("{}", result); // Print the result
}
