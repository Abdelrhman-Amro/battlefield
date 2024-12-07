#!/usr/bin/env python3

# TAGS -> type casting - Explicit vs Implicit
### What ia the type casting concept?
# type casting = The process of converting a value of one data type to another
#                          (string, integer, float, boolean)
#                          Explicit vs Implicit
#                          Explicit = using the type casting function
#                          Implicit = using the assignment operator

name = "Bro"
age = 21
gpa = 1.9
student = True
print("Do you ask what is the type of each one?")
print("name -> ", type(name))
print("age -> ", type(age))
print("gpa -> ", type(gpa))
print("student -> ", type(student), "\n")

# Explicit type casting
age = float(age)
print(age)

gpa = int(gpa)
print(gpa)

student = str(student)
print(student)

name = bool(name)
print(name)

# Implicit type casting
x = 3    
y = 2.5   
print(x + y)  # (float)

x = "Python"   
y = 3          
print(x * y)  # "PythonPythonPython"
