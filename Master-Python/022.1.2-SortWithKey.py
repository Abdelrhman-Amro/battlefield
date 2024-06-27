#!/usr/bin/env python3

# sort() method   = used with lists
# sort() function = used with iterables

##### What is a key function? #####
# A key function is a function that takes an element from the list as an argument and returns a value that will be used for sorting.
# The key function is called once for each element in the list, and the returned values are used to determine the sorted order.

def Iteration(X):
    for x in X:
        print(x)

students = (("Squidward", "F", 60),
            ("Sandy", "A", 33),
            ("Patrick","D", 36),
            ("Spongebob","B", 20),
            ("Mr.Krabs","C", 78))

# Sort by second index (GRADE)
SortedGrades = sorted(students, key=lambda S: S[1])
print("Sorted by grade:")
Iteration(SortedGrades)

# Sort by last index (AGE)
SortedAges = sorted(students, key=lambda S: S[2])
print("Sorted by Age:")
Iteration(SortedAges)

# Sort by the length of the first name
Length = lambda S: len(S[0])
Sorted_biggest_Lenght = sorted(students, key=Length, reverse=True)
print("\nSorted by biggest length name:")
Iteration(Sorted_biggest_Lenght)
