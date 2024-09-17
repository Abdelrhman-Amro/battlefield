#!/usr/bin/env python3

# 1. Positional 2. Default 3. Keyword 4. Aribtrary

# keyword arguments
def Sum(x, y, z):
    print(f"({x}, {y}, {z})")
    return x + y + z

print(Sum(1, 2, 3))
print(Sum(1, z=2, y=3))
print(Sum(z=1, x=2, y=3))
