#!/usr/bin/env python3

# Import the time module to use the sleep function
import time

# Ask the user to input the times
hours = int(input("Enter hours: "))
minutes = int(input("Enter minutes: "))
seconds = int(input("Enter seconds: "))

for h in range(hours, -1, -1):
    for m in range(minutes, -1, -1):
        for s in range(seconds, -1, -1):
            print(f"{h:02}:{m:02}:{s:02}")
            # Wait for 1 second before continuing
            time.sleep(1)
        # Reset the seconds to 60 for the next minute
        seconds = 60
    # Reset the minutes to 60 for the next hour
    minutes = 60
