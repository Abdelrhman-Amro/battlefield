#!/usr/bin/env python3

# Tags: len - count - capitalize - upper - lower
#       isdigit - isalpha - find - rfind - replace

str = input("Enter the testing string: ")

print("\nLength of the string: ", len(str))
# count() is used to count the number of times a character/s appears in a string
print("Count of spaces: ", str.count(" "))

# capitalize() is used to capitalize the first letter
print("\nCapitalized string: ", str.capitalize())
print("Uppercase string: ", str.upper())
print("Lowercase string: ", str.lower())

print("\nIs string a digit? ", str.isdigit())
print("Is string a letter? ", str.isalpha()) 

# find() is used to find the index of the first appearance of the character/s
    # Starting from the beginning of the string
print("\nIndex of the first space: ", str.find(" "))
# rfind() is used to find the index of the first appearance of the character/s
    # Starting from the end of the string
print("Index of the last space: ", str.rfind(" "))
# -----> -1 means that the character/s is not found <----- #

# replace() is used to replace the character/s with another character/s
print("\nreplace '-' to '~ ~': ", str.replace("-", "~ ~"))
