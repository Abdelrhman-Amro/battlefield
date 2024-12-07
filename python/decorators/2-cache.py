#!/usr/bin/env python3

from functools import lru_cache

@lru_cache(maxsize=10)
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(999))
