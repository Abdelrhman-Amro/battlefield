#!/usr/bin/env python3

# Comprehension
# x for exepression
# e for element
# i for iterable
# c for condition

[print(i, end=" ") for i in range(1, 4)]

print()
[print(i, end=" ") for i in range(1, 10) if i % 2]

print()
[print("ODD", end=" ") if i % 2 else print("EVEN", end=" ") for i in range(1, 11)]

print()
[print("Even", end=" ") if i % 3 == 2 else print("ODD", end=" ") if i % 3 == 1 else print("D3", end=" ") for i in range(1, 11)]

print()
Matrix = [[1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]]
[print(i) for row in Matrix for i in row]

matrix = [[i*j for j in range(1, 4)] for i in range(1, 4)]
print(matrix)

# Creating a dictionary of squares using nested dictionary comprehension
squares = {i: {j: j**2 for j in range(1, 4)} for i in range(1, 4)}
print(squares)
# Output: {1: {1: 1, 2: 4, 3: 9}, 2: {1: 1, 2: 4, 3: 9}, 3: {1: 1, 2: 4, 3: 9}}
