#!/usr/bin/env python3

# 1. Positional 2. Default 3. Keyword 4. Aribtrary

# Default arguments
def Sum(x, y, constant=4):
    return x + y + constant
print("Sum with default constant:", Sum(1, 2))
print("Sum with custom constant:", Sum(1, 2, 3))


def Const(c1=3, c2=4, c3=5):
    return c1 + c2 + c3
print("Const with all default values:", Const())
print("Const with one custom value:", Const(1))
print("Const with two custom values:", Const(1, 2))
print("Const with three custom values:", Const(1, 2, 3))
