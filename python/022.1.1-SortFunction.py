#!/usr/bin/env python3

# sort() method   = used with lists
# sort() function = used with iterables

def Iteration(X):
    for x in X:
        print(x)

students = (("Squidward", "F", 60),
            ("Sandy", "A", 33),
            ("Patrick","D", 36),
            ("Spongebob","B", 20),
            ("Mr.Krabs","C", 78))

print("Before sort:")
Iteration(students)

SortedStudents=sorted(students)
print("\nAfter sort:")
Iteration(SortedStudents)

# Reversed sort
ReverseSortedStudents=sorted(students, reverse=True)
print("\nAfter reverse sort:")
Iteration(ReverseSortedStudents)
