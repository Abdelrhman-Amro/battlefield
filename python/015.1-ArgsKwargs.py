#!/usr/bin/env python3

def Sums_Packing(*args):
    total = args[0]

    print(f"{args[0]}", end="")
    for n in args[1:]:
        total += n
        print(f" + {n}", end="")
    print(f" = {total}")

print("Sums Packing:")
Sums_Packing(1, 2, 3, 4, 5)
Sums_Packing(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)


def Sums_Unpackeing(a, b, c):
    print(f"{a} + {b} + {c} = {a + b + c}")

print("\nSums Unpacking:")
pack = [1, 2, 3]
Sums_Unpackeing(*pack)


def IDs(**kwargs):
    for key, value in kwargs.items():
        print(f"(K={key}, V={value})", end=" ")
    print()

print("\nIDs:")
IDs(a=1, b=2, c=3, d=4, e=5)
