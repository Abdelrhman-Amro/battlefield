#!/usr/bin/env python3

import asyncio

# coroutine function
async def main():
    print("Start of main coroutine")

# main() # coroutine object - if you execute it like that will give you error
""" print(main())
    <coroutine object main at 0x7f9409f599c0>
    /home/abdelrhman/battlefield/python/asyncio/./coroutine.py:11: RuntimeWarning: coroutine 'main' was never awaited
    print(main())
    RuntimeWarning: Enable tracemalloc to get the object allocation traceback
"""

# run the coroutine function
asyncio.run(main())
