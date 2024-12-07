#!/usr/bin/env python3

import datetime

def log_function_call(func):
    # add new features here
    def wrapper(*args, **kwargs):
        print(f"{datetime.datetime.now()}: called {func.__name__} with args {args}")
        result = func(*args, **kwargs)
        print(f"{datetime.datetime.now()}: {func.__name__} returned {result}")
        return result

    # to execute the decorator
    return wrapper

@log_function_call
def calculate_sum(a, b):
    return a + b

print(calculate_sum(40, 1_000))
print(calculate_sum(4, 1_00))
print(calculate_sum(500, 1_400))
