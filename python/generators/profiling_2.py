#!/usr/bin/env python3

import cProfile

cProfile.run("sum([i * 2 for i in range(10000)])")

cProfile.run("sum((i * 2 for i in range(10000)))")

# Conclusions
"""
If the list is smaller than the running machine’s available memory, 
    then list comprehensions can be faster to evaluate 
        than the equivalent generator expression.
"""
