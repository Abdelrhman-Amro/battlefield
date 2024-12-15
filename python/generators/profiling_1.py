#!/usr/bin/env python3

import sys

nums_squared_lc = [i**2 for i in range(10000)]  # lc -> List Comprehension
print(f"size of nums_squared_lc: {sys.getsizeof(nums_squared_lc)} bytes")
print(nums_squared_lc)

nums_squared_gc = (i**2 for i in range(10000))  # gc -> Generator Comprehension
print(f"size of nums_squared_gc: {sys.getsizeof(nums_squared_gc)} bytes")
print(nums_squared_gc)
