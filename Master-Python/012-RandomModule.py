#!/usr/bin/env python3

import random

# Generate a random floating-point number between 0 and 1
number = random.random()
print("Random float: ", number)

# Generate a random integer between 1 and 100
number = random.randint(1, 100)
print("Random int: ", number)

# Select a random answer from a multiple-choice question
MCQ = ['a', 'b', 'c', 'd']
ANS = random.choice(MCQ)
print("Random answer: ", ANS)

# Select a random sample of 4 cards from a deck
cards = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
groub = random.sample(cards, 4)
print("Random card sample: ", groub)

# Shuffle the entire deck of cards
random.shuffle(cards)
print("Shuffled deck: ", cards)
