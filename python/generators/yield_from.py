#!/usr/bin/env python3


def catch_this():
    for i in range(3):
        yield i


def catch_that():
    yield from catch_this()
    for i in range(3, 6):
        yield i


for i in catch_that():
    print(i)
