#!/usr/bin/env python3

# Exercise 1: Double each number in a list.
# Exercise 2: Convert a list of strings to uppercase.
# Exercise 3: Add 2 to each number in a list.

# Exercise 1: Double each number in a list.
numbers = [1, 2, 3, 4, 5]
Doub = lambda n: n*2
doubled_numbers = list(map(Doub, numbers))
print("Ex 1: ", doubled_numbers)

# Exercise 2: Convert a list of strings to uppercase.
strings = ['hello', 'world', 'python']
Uppers = list(map(lambda str: str.upper(), strings))
print("Ex 2: ", Uppers)

# Exercise 3: Add 2 to each number in a list.
numbers = [1, 2, 3, 4, 5]
PlusTwo = list(map(lambda n: n+2, numbers))
print("EX 3: ", PlusTwo)
