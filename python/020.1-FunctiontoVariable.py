#!/usr/bin/env python3

def Hello():
    print("Hello World")
    
print("This is will be the address of the function (Hello): ", Hello)
Hello()

Hi = Hello
print("See? the same address of (Hello): ", Hi)
Hi()

# Say will work exactly the same as print
Say = print
Say("Whoa! I can't believe this works! :O")
