#!/usr/bin/env python3

# walrus operator :=
# new to Python 3.8
# assignment expression aka walrus operator
# assigns values to variables as part of a larger expression

# Block 1
TheLightKey = True
print(TheLightKey)

print("With Walrus Operator: ", TheLightKey:=True, end="\n\n")



# Block 2
foods = list()
while True:
    food = input("What do you want to eat? ")
    if food == "quit":
        break
    foods.append(food)
print("Foods: ", foods, end='\n\n')

print("With Walrus Operator: ")
foods = list()
while (food := input("What do you want to eat? ")) != "quit":
    foods.append(food)
print("Foods: ", foods, end='\n\n')
