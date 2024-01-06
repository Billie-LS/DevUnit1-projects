import numpy as np
from typing import Union

# Declare and assign the variables below
shuttle_name: str = 'Determination'
shuttle_speed_mph: int = 17500
mars_distance_km: int = 225000000
moons_distance_km: int = 384400
miles_per_km: float = 0.621

# Use print to display the type of each variable. Print one item per line.
print(f"Type of shuttle_name: {type(shuttle_name)}")
print(f"Type of shuttle_speed_mph: {type(shuttle_speed_mph)}")
print(f"Type of mars_distance_km: {type(mars_distance_km)}")
print(f"Type of moons_distance_km: {type(moons_distance_km)}")
print(f"Type of miles_per_km: {type(miles_per_km)}")

# Calculate a space mission below

# calculate miles to Mars and travel time in days using NumPy
mars_distance_miles: float = np.multiply(mars_distance_km, miles_per_km)
time_to_mars_days: float = np.divide(mars_distance_miles, shuttle_speed_mph * 24)

# Print the results of the space mission calculations below
print(f"{shuttle_name} will take {time_to_mars_days:.2f} days to reach Mars.")

# Calculate a trip to the moon below
# calculate miles to Moon and travel time in days using NumPy
moon_distance_miles: float = np.multiply(moons_distance_km, miles_per_km)
time_to_moon_days: float = np.divide(moon_distance_miles, shuttle_speed_mph * 24)

# Print the results of the trip to the moon below
print(f"{shuttle_name} will take {time_to_moon_days:.2f} days to reach the Moon.")

print("Coding Rocks")
