#!/usr/bin/env python3

# indexing = accessing elements of a sequence using [] (indexing operator)
#                     [start : end : step]
#                     start is inclusive, end is exclusive, step is optional
credit_number = "1234-5678-9012-3456"

print("******* Accessing individual characters *******")
print("Credit Number[0]:", credit_number[0])  # Output: 1
print("Credit Number[1]:", credit_number[1])  # Output: 2
print("Credit Number[2]:", credit_number[2])  # Output: 3

print("\n******* Accessing individual characters from the end *******")
print("Credit Number[-1]:", credit_number[-1])  # Output: 6
print("Credit Number[-2]:", credit_number[-2])  # Output: 5
print("Credit Number[-3]:", credit_number[-3])  # Output: 4

print("\n******* Accessing substrings *******")
print("Credit Number[:]:", credit_number[:])  # Output: 1234-5678-9012-3456
print("Credit Number[:4]:", credit_number[:4])  # Output: 1234
print("Credit Number[5:]:", credit_number[5:])  # Output: 678-9012-3456

print("\n******* Accessing substrings with start and end indices *******")
print("Credit Number[0:4]:", credit_number[0:4])  # Output: 1234
print("Credit Number[5:9]:", credit_number[5:9])  # Output: 6789
print("Credit Number[-9:-5]:", credit_number[-9:-5])  # Output: 0123

print("\n******* Accessing substrings with steps *******")
print("Credit Number[::]:", credit_number[::])  # Output: 1234-5678-9012-3456
print("Credit Number[::2]:", credit_number[::2])  # Output: 142-658-120-36
print("Credit Number[::-1]:", credit_number[::-1])  # Output: 6543-2190-8765-4321
