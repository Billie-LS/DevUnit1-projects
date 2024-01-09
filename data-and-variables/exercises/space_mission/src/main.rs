use std::f64;

fn main() {
    println!("Coding Rocks");

    // Declare and assign the variables
    let shuttle_name = "Determination";
    let shuttle_speed_mph = 17500.0;
    let mars_distance_km = 225000000.0;
    let moons_distance_km = 384400.0;
    let miles_per_km = 0.621;

    // Print the type of each variable
    println!("Type of shuttle_name: {}", type_of(&shuttle_name));
    println!("Type of shuttle_speed_mph: {}", type_of(&shuttle_speed_mph));
    println!("Type of mars_distance_km: {}", type_of(&mars_distance_km));
    println!("Type of moons_distance_km: {}", type_of(&moons_distance_km));
    println!("Type of miles_per_km: {}", type_of(&miles_per_km));

    // Calculate a space mission to Mars
    let mars_distance_miles = mars_distance_km * miles_per_km;
    let time_to_mars_hours = mars_distance_miles / shuttle_speed_mph;
    let time_to_mars_days = time_to_mars_hours / 24.0;

    // Print the results of the space mission to Mars
    println!(
        "{} will take {} days to reach Mars.",
        shuttle_name, time_to_mars_days
    );

    // Calculate a trip to the moon
    let moon_distance_miles = moons_distance_km * miles_per_km;
    let time_to_moon_hours = moon_distance_miles / shuttle_speed_mph;
    let time_to_moon_days = time_to_moon_hours / 24.0;

    // Print the results of the trip to the Moon
    println!(
        "{} will take {} days to reach the Moon.",
        shuttle_name, time_to_moon_days
    );

    println!("Coding Rocks");
}

// Function to get the type of a variable as a string
fn type_of<T>(_: T) -> &'static str {
    std::any::type_name::<T>()
}
