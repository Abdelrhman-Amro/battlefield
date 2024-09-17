#!/usr/bin/env python3

# Input: n of dice
# Output: values of dices in dice shape and the total of values

# Step-0: Ask for n of dice
# Step-1: Generate n of random numbers
# Step-2: Loop to print shpes of results in horisontal line and calc the total

import random

# Dictionary to store dice shapes for each possible value (1-6)
the_dice = {
    1: ("┌─────────┐",
        "│         │",
        "│    ●    │",
        "│         │",
        "└─────────┘"),
    2: ("┌─────────┐",
        "│  ●      │",
        "│         │",
        "│      ●  │",
        "└─────────┘"),
    3: ("┌─────────┐",
        "│  ●      │",
        "│    ●    │",
        "│      ●  │",
        "└─────────┘"),
    4: ("┌─────────┐",
        "│  ●   ●  │",
        "│         │",
        "│  ●   ●  │",
        "└─────────┘"),
    5: ("┌─────────┐",
        "│  ●   ●  │",
        "│    ●    │",
        "│  ●   ●  │",
        "└─────────┘"),
    6: ("┌─────────┐",
        "│  ●   ●  │",
        "│  ●   ●  │",
        "│  ●   ●  │",
        "└─────────┘")
}

# Initialize lists to store dice values and calculate total
dice_values = []
total = 0

# Ask for the number of dice
n_dice = int(input("How many dice? "))

# Generate random values for each die
for i in range(n_dice):
    x = random.randint(1, 6)
    total += x
    dice_values.append(x)

# Print dice shapes for each value
for line in range(5):
    for value in dice_values:
        print(the_dice.get(value)[line], end=" ")
    print()

# Print the total of the dice values
print(f"Total: {total}")
