#!/usr/bin/env python3

# Check if file exists
    # check if file
    # check if directory

import os

PATH = "/root/Courses/Master-Python/018-FileDetection.py"
if os.path.exists(PATH):
    print("Exists")
    if os.path.isfile(PATH):
        print("File")
    if os.path.isdir(PATH):
        print("Directory")
else:
    print("Does not exist")
