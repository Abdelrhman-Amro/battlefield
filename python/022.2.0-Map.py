#!/usr/bin/env python3

# map() is a built-in function that
# applies a given function to each item of an iterable (such as a list, tuple, or string)
# Returns a map object of the results.
# map(function, iterable)

numbers = [1, 2, 3, 4, 5]
Doub = lambda n: n*2
doubled_numbers = map(Doub, numbers)
print("This is map object: ", doubled_numbers)
doubled_numbers = list(doubled_numbers)
print("Ok now you can see the list: ", doubled_numbers)
print("As you see too the original list stay original: ", numbers)
