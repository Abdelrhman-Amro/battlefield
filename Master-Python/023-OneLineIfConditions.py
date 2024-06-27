#!/usr/bin/env python3

# One line condition

# 1. if else
Bool1 = 15 if True else 20
Bool2 = 15 if False else 20

# 2. if elif else
Bool3 = 15 if False else 20 if True else 30
Bool4 = 15 if False else 20 if False else 30
Bool5 = 15 if False else 20 if False else 30 if True else 40

print("Bool1: ", Bool1)
print("Bool2: ", Bool2)
print("Bool3: ", Bool3)
print("Bool4: ", Bool4)
print("Bool5: ", Bool5)
