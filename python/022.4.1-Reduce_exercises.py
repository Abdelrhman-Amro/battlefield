#!/usr/bin/env python3

from functools import reduce

# 1. calculate the sum of a list of numbers.
numbers = [1, 2, 3, 4, 5]
sum = reduce(lambda x, y: x+y, numbers)
print("The sum of digits: ", sum)

# 2. calculate the product of a list of numbers.
numbers = [1, 2, 3, 4, 5]
product = reduce(lambda x, y: x*y, numbers)
print("The product of numbers: ", product)

# 3. concatenate a list of strings separeted by space.
strings = ['hello', 'world', 'python']
sentence = reduce(lambda x,y: x+' '+y, strings)
print("The single sentenc: ", sentence)

# 4. calculate the maximum value in a list of numbers.
numbers = [10, 20, 30, 40, 50]
max = reduce(lambda x, y: x if x > y else y, numbers)
print("The maximum number is: ", max)
