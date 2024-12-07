#!/usr/bin/env python3

import os
creating_text = "... I am new here ..."
text = "Yooooooooo\nThis is some text\nHave a good one!\n"

# Creates the specified file, returns an error if the file exists
with open('test.txt','x') as file:
    file.write(text)

# Overwrite the file
#with open('test.txt','w') as file:
#    file.write(text)

# appending to a file
with open('test.txt','a') as file:
    file.write('This is some more text\n')
