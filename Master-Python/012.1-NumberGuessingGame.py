#!/usr/bin/env python3

from random import randint

number = randint(1, 100)

while True:
    guess = int(input("Guess a number between 1 and 100: "))
    if guess == number:
        print("You got it!")
        break
    elif guess < number:
        print("Too low!")
    else:
        print("Too high!")
