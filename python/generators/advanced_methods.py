#!/usr/bin/env python3


################### functions to work with ####################
def is_palindrome(num):
    # Skip single-digit inputs
    if num // 10 == 0:
        return False
    temp = num
    reversed_num = 0

    while temp != 0:
        reversed_num = (reversed_num * 10) + (temp % 10)
        temp = temp // 10

    if num == reversed_num:
        return True
    else:
        return False


def infinite_palindromes():
    num = 0
    while True:
        if is_palindrome(num):
            i = yield num
            if i is not None:
                num = i
        num += 1


################### END ####################


################### Working with advanced methods ####################
# The send() method can be called to send a value to the generator
def send_method():
    pal_gen = infinite_palindromes()
    for i in pal_gen:
        print(i)
        digits = len(str(i))
        pal_gen.send(10 ** (digits))


# The throw() method can be called to throw an exception
def throw_method():
    pal_gen = infinite_palindromes()
    for i in pal_gen:
        print(i)
        digits = len(str(i))
        if digits == 5:
            pal_gen.throw(ValueError("We don't like large palindromes"))
        pal_gen.send(10 ** (digits))


# The close() method can be called to terminate the generator
def close_method():
    pal_gen = infinite_palindromes()
    for i in pal_gen:
        print(i)
        digits = len(str(i))
        if digits == 5:
            pal_gen.close()
        pal_gen.send(10 ** (digits))


################### END ####################

if __name__ == "__main__":
    # test what you want
    # send_method()
    # throw_method()
    close_method()
