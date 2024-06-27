#!/usr/bin/env python3
from math import sqrt

# hypotenuse calculator
a = float(input("Enter the length of the first side: "))
b = float(input("Enter the length of the second side: "))

c = sqrt(pow(a, 2) + pow(b, 2))
print(f"The hypotenuse of the triangle is {c}")
