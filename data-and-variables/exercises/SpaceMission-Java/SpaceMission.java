public class SpaceMission {
    public static void main(String[] args) {
        System.out.println("Coding Rocks");

        // Declare and assign the variables
        String shuttleName = "Determination";
        double shuttleSpeedMph = 17500.0;
        double marsDistanceKm = 225000000.0;
        double moonsDistanceKm = 384400.0;
        double milesPerKm = 0.621;

        // Print the type of each variable
        System.out.println("Type of shuttleName: " + shuttleName.getClass().getName());
        System.out.println("Type of shuttleSpeedMph: " + Double.TYPE);
        System.out.println("Type of marsDistanceKm: " + Double.TYPE);
        System.out.println("Type of moonsDistanceKm: " + Double.TYPE);
        System.out.println("Type of milesPerKm: " + Double.TYPE);

        // Calculate a space mission to Mars
        double marsDistanceMiles = marsDistanceKm * milesPerKm;
        double timeToMarsHours = marsDistanceMiles / shuttleSpeedMph;
        double timeToMarsDays = timeToMarsHours / 24.0;

        // Print the results of the space mission to Mars
        System.out.println(shuttleName + " will take " + timeToMarsDays + " days to reach Mars.");

        // Calculate a trip to the moon
        double moonDistanceMiles = moonsDistanceKm * milesPerKm;
        double timeToMoonHours = moonDistanceMiles / shuttleSpeedMph;
        double timeToMoonDays = timeToMoonHours / 24.0;

        // Print the results of the trip to the Moon
        System.out.println(shuttleName + " will take " + timeToMoonDays + " days to reach the Moon.");

        System.out.println("Coding Rocks");
    }
}
