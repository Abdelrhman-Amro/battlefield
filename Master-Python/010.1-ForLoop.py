#!/usr/bin/env python3

# For loops execute a block of code a fixed number of times.
# You can iterate over a range, string, sequence, etc.

# Iterating over a range
print("Example 1: Counting from 1 to 10")
for x in range(1, 11):
   print(x)

print("\nExample 2: Counting from 10 to 1")
for x in reversed(range(1, 11)):
   print(x)

print("\nHappy New Year!")

print("\nExample 3: Counting from 1 to 10 with step 2 (That give odd numbers)")
for x in range(1, 11, 2):
   print(x)

# Iterating over a string
print("\nExample 4: Iterating over a credit card number")
credit_card = "1234-5678-9012-3456"
for x in credit_card:
   print(x, end="")  # Print each character on the same line
print("\n")

# Continue
print("\nExample 5: Continue - Skipping 13")
for x in range(1, 21):
   if x == 13:
       continue
   else:
       print(x)

# Break
print("\nExample 6: Break - Stopping at 13")
for x in range(1, 21):
   if x == 13:
       break
   else:
       print(x)
