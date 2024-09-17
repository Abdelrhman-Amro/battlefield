#!/usr/bin/env python3

# range() use to generate a sequence of numbers
# syntax: range(start, stop, step)
    # step is optional, and it use to skip some numbers

print("Example 1: range(stop)")
print("Prints numbers from 0 to 9:")
for i in range(10):
    print(i)

print("\nExample 2: range(start, stop)")
print("Prints numbers from 1 to 9:")
for i in range(1, 10):
    print(i)

print("\nExample 3: range(start, stop, step)")
print("Prints numbers from 1 to 9, stepping by 2:")
for i in range(1, 10, 2):
    print(i)

print("\nExample 4: range(start, stop, step)")
print("Prints numbers from 10 to 1, stepping by -1:")
for i in range(10, 0, -1):
    print(i)

print("\nExample 5: reversed(range(start, stop, step))")
print("Prints numbers from 5 to 1:")
for i in reversed(range(1, 6)):
    print(i)
