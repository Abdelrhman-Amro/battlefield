#!/usr/bin/env python3
import os
import sys

folder = sys.argv[1]
file1 = 'index.html'
file2 = 'style.css'

os.mkdir(sys.argv[1])
open(os.path.join(folder, file1), 'w')
open(os.path.join(folder, file2), 'w')
