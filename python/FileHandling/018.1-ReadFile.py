#!/usr/bin/env python3

# open(FilePath, mode) By default, the file is opened in text read mode.
    # modes:
    # r: read
    # w: write
    # a: append
    # x: Creates the specified file, returns an error if the file exists

    # "t" - Text - Default value. Text mode
    # "b" - Binary - Binary mode (e.g. images)
    
    # "r+" - Read and Write
    # "w+" - Write and Read
    # "a+" - Append and Read
    # "x+" - Create and Read and Write
# close()
# read()
# write()

# with open() as f:
    # The importance of that is ...
    # This closes the file automatically when the block is done
    
import os

try:
    with open('test.txt') as file:
        print(file.read())
except FileNotFoundError:
    print("That file was not found :(")

try:
    with open('test.txt', 'r') as file:
        line = file.readline()
        while line:
            print(line, end='')
            line = file.readline()
except FileNotFoundError:
    print("That file was not found :(")
