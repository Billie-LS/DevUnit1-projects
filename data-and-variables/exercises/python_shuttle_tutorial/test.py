# Imports
from typing import Union

# Declare and assign the variables below
shuttle_name: str = 'Determination'
shuttle_speed_mph: int = 17500
mars_distance_km: int = 225000000
moons_distance_km: int = 384400
miles_per_km: float = 0.621

# Use print to display the type of each variable. Print one item per line.
print(type(shuttle_name))
print(type(shuttle_speed_mph))
print(type(mars_distance_km))
print(type(moons_distance_km))
print(type(miles_per_km))

# Calculate a space mission parameters below

# calculate miles to Mars
mars_distance_miles: float = mars_distance_km * miles_per_km
# calculate travel time in hours to Mars
time_to_mars_hours: float = mars_distance_miles / shuttle_speed_mph
# calculate travel time in days to Mars
time_to_mars_days: float = time_to_mars_hours / 24

# Print the results of the space mission calculations below
print(f"{shuttle_name} will take {time_to_mars_days} days to reach Mars.")

# Calculate a trip to the moon below
# calculate miles to Moon
moon_distance_miles: float = moons_distance_km * miles_per_km
# calculate travel time in hours to Moon
time_to_moon_hours: float = moon_distance_miles / shuttle_speed_mph
# calculate travel time in days to Moon
time_to_moon_days: float = time_to_moon_hours / 24

# Print the results of the trip to the moon below
print(f"{shuttle_name} will take {time_to_moon_days} days to reach the Moon.")

print("Coding Rocks")

# [Done] exited with code=0 in 0.035 seconds