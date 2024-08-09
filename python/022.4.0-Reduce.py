#!/usr/bin/env python3
# reduce() = apply a function to an iterable and reduce it to a single cumulative value.
#            performs function on first two elements and repeats process until 1 value remains
#
# reduce(function, iterable)

from functools import reduce

numbers = [1, 2, 3, 4, 5]
sum = reduce(lambda x, y: x+y, numbers)
print("The sum of digits: ", sum)
# The Steps reduce do:
    # step 1: 1 + 2 > [3, 3, 4, 5]
    # Step 2: 3 + 3 > [6, 4, 5]
    # Step 3: 6 + 4 > [10, 5]
    # Step 4: 10 + 5 > 15
print(type(sum)) # It is int
    