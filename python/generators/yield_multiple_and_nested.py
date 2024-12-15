#!/usr/bin/env python3


def Yield():
    for num in range(2, 5):
        squared = num**2
        msg1 = f"Num: {num}"
        msg2 = f"Squared: {squared}"

        yield msg1
        yield msg2

        for i in range(3):
            stop_msg = f"stop {i}..."
            yield stop_msg

        print("\n")


yielded = Yield()

i = 1

while True:
    try:
        print(f"{i}-Call --> {next(yielded)}")
        i += 1
    except StopIteration:
        break
