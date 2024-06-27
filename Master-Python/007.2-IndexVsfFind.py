#!/usr/bin/env python3

# index() and find()
    # both return the index of the first element that matches the specified value
# the difference between them
    # find() returns -1 if the element is not found
    # index() raises ValueError if the element is not found

my_string = "hello world"

# Basic Use
print("Find 'o' in string:", my_string.find('o'))
print("Index of 'o' in string:", my_string.index('o'))

# The difference is here
try:
    print("Index of 'z' in string:", my_string.index('z'))  # Raises ValueError
except ValueError:
    print("Error: 'z' is not found in the string")  # Output: Error: 'z' is not found in the string


print("Find 'z' in string:", my_string.find('z'))  # Output: -1
