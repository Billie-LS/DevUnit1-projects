// Import the LaunchCode struct from the same module
use launch_code::LaunchCode;

// Test the LaunchCode struct and its methods
#[cfg(test)]
mod tests {
    // Import necessary items from the testing module
    use super::*;

    // Test the LaunchCode struct properties
    #[test]
    fn test_launchcode_properties() {
        // Create a LaunchCode instance for testing
        let launch_code = LaunchCode {
            organization: "nonprofit",
            executive_director: "Jeff",
            percentage_cool_employees: 100,
            programs_offered: vec!["Web Development", "Data Analysis", "Liftoff"],
        };

        // Test organization property
        assert_eq!(launch_code.organization, "nonprofit");

        // Test executive director property
        assert_eq!(launch_code.executive_director, "Jeff");

        // Test percentage cool employees property
        assert_eq!(launch_code.percentage_cool_employees, 100);

        // Test programs offered property
        assert_eq!(
            launch_code.programs_offered,
            vec!["Web Development", "Data Analysis", "Liftoff"]
        );
    }

    // Test the launch_output method of LaunchCode struct
    #[test]
    fn test_launch_output() {
        // Create a LaunchCode instance for testing
        let launch_code = LaunchCode {
            organization: "nonprofit",
            executive_director: "Jeff",
            percentage_cool_employees: 100,
            programs_offered: vec!["Web Development", "Data Analysis", "Liftoff"],
        };

        // Test various scenarios for the launch_output method

        // Test when the number is divisible by 2
        assert_eq!(launch_code.launch_output(2), "Launch!");

        // Test when the number is divisible by 3
        assert_eq!(launch_code.launch_output(3), "Code!");

        // Test when the number is divisible by 5
        assert_eq!(launch_code.launch_output(5), "Rocks!");

        // Test when the number is divisible by both 2 and 3
        assert_eq!(launch_code.launch_output(6), "LaunchCode!");

        // Test when the number is divisible by both 2 and 5
        assert_eq!(launch_code.launch_output(10), "Launch Rocks! (CRASH!!!!)");

        // Test when the number does not satisfy any conditions
        assert_eq!(launch_code.launch_output(7), "Bang!");
    }
}
