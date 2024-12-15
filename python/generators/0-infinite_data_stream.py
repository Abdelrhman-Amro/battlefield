#!/usr/bin/env python3

import time
import random

def sensor_data_stream():
    # Generate an infinite stream of sensor data
    while True:
        # Yield a dictionary containing the current timestamp and a random value
        yield {"timestamp": time.time(), "value": random.uniform(20, 30)}
        # Pause for 1 second before generating the next data point
        time.sleep(1)

# Iterate over the infinite stream of sensor data and print each data point
for data in sensor_data_stream():
    print(data)
