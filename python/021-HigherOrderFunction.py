#!/usr/bin/env python3

#  Higher Order Function =  a function that either:
#                           1. accepts a function as an argument
#                               or
#                           2. returns a function
#                           (In python, functions are also treated as objects)

# ----- 1. accepts a function as an argument -----
def loud(text):
   return text.upper()

def quiet(text):
   return text.lower()

def hello(func):
   text = func("Hello")
   print(text)

hello(loud)
hello(quiet)

# ------------ 2. returns a function -------------
def divisor(x):
   def dividend(y):
       return y / x
   return dividend


divide = divisor(2) # returns a dividend function
print(divide(10)) # Here is the use of the dividend inside divisor
