#!/usr/bin/env python3

# filter() is a built-in function that allows you to filter elements
# from an iterable (like a list, tuple, or set) based on a condition.
# It works by applying a given function to each item in the iterable
# and returning only the items for which the function returns `True`.
# ⚠️Returns a filter object of the results.


# 1: get all the even numbers from a list.
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
EvenNumbers = filter(lambda n: (n % 2) == 0, numbers)
print("Filter object address: ", EvenNumbers) # ⚠️If i print directly will print address of filter object
print("Enven numbers: ", list(EvenNumbers))

# 2: get all the strings that start with a vowel from a list.
words = ["apple", "banana", "egg", "orange", "uvula"]
vowel = {'a', 'e', 'o', 'i', 'u'}
WordsVowel = list(filter(lambda s: s[0] in vowel, words))
print("Words start with vowel letter: ", WordsVowel)

# 3: get all the numbers greater than 5 from a list.
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
GreaterNumbers = list(filter(lambda n: n > 5, numbers))
print("Numbers greater than five: ", GreaterNumbers)

# 4: get all the strings that are longer than 5 characters from a list.
words = ["apple", "banana", "cherry", "date", "elderberry", "fig"]
LongWords = list(filter(lambda s: len(s) > 5, words))
print("Words length greater than 5: ", LongWords)

# 5: get all the numbers that are divisible by 3 from a list.
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Divisible = list(filter(lambda n: n % 3 == 0, numbers))
print("Numbers divisible by 3: ", Divisible)

# 6: get all the strings that contain the letter "a" from a list.
words = ["apple", "banana", "cherry", "date", "elderberry", "fig"]
ContainA = list(filter(lambda s: 'a' in s, words))
print("Words contain 'a': ", ContainA)
