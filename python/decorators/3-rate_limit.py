#!/usr/bin/env python3

import time

def rate_limit(max_calls, time_period):
    calls = []
    
    def decorator(func):
        def wrapper(*args, **kwargs):
            current_time = time.time()
            calls.append(current_time)
            
            # Remove old calls that are older than 
                # the time period to enforce rate limiting
            calls[:] = [call for call in calls if call > current_time - time_period]
            
            if len(calls) > max_calls:
                return "Too many requests. Please wait ... "

            return func(*args, **kwargs)
        return wrapper
    return decorator        

@rate_limit(max_calls=3, time_period=10)
def api_request(endpoint):
    return f"Data from {endpoint}"

for _ in range(5):
    print(api_request("/user-data"))
    time.sleep(0.5)
