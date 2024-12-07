#!/usr/bin/env python3

def generate_numbers(limit):
    for i in range(limit):
        print("first-", end='')
        yield i

def filter_even_numbers(numbers):
    for n in numbers:
        if n % 2 == 0:
            print("second-", end='')
            yield n
        else:
            print("second-Odd")

def square_even_numbers(numbers):
    for n in numbers:
        print("third-", end='')
        yield n ** 2

numbers = generate_numbers(100)
even_numbers = filter_even_numbers(numbers)
squared_numbers = square_even_numbers(even_numbers)

for squared in squared_numbers:
    print(squared)
