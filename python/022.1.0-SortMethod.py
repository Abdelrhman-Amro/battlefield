#!/usr/bin/env python3

# sort() method   = used with lists
# sort() function = used with iterables

#!/usr/bin/env python3

def Iteration(X):
    for x in X:
        print(x)

students = [("Squidward", "F", 60),
            ("Sandy", "A", 33),
            ("Patrick","D", 36),
            ("Spongebob","B", 20),
            ("Mr.Krabs","C", 78)]

print("Before sort:")
Iteration(students)

students.sort()
print("\nAfter sort:")
Iteration(students) # ⚠️It sorts the original list, not a copy!

# Reversed sort
students.sort(reverse=True)
print("\nAfter reverse sort:")
Iteration(students)
