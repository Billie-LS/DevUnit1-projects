# Declare and assign the variables below
shuttle_name = 'Determination'
shuttle_speed_mph = 17500
mars_distance_km = 225000000
moons_distance_km = 384400
miles_per_km = 0.621

# Use print to display the type of each variable. Print one item per line.
print(type(shuttle_name))
print(type(shuttle_speed_mph))
print(type(mars_distance_km))
print(type(moons_distance_km))
print(type(miles_per_km))

# Calculate a space mission below

# calculate miles to Mars
mars_distance_miles = mars_distance_km * miles_per_km
# calculate travel time in hours to Mars
time_to_mars_hours = mars_distance_miles / shuttle_speed_mph
# calculate travel time in days to Mars
time_to_mars_days = time_to_mars_hours / 24

# Print the results of the space mission calculations below
print(f"{shuttle_name} will take {time_to_mars_days} days to reach Mars.")

# Calculate a trip to the moon below
# calculate miles to Moon
moon_distance_miles = moons_distance_km * miles_per_km
# calculate travel time in hours to Moon
time_to_moon_hours = moon_distance_miles / shuttle_speed_mph
# calculate travel time in days to Moon
time_to_moon_days = time_to_moon_hours / 24

# Print the results of the trip to the moon below
print(f"{shuttle_name} will take {time_to_moon_days} days to reach the Moon.")

print("Coding Rocks")

# [Done] exited with code=0 in 0.033 seconds