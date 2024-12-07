#!/usr/bin/env python3

# zip(*iterables) =  aggregate elements from two or more iterables (list, tuples, sets, etc.)
#                    creates a zip {{OBJECT}} with paired elements stored in tuples for each element

usernames = ["Dude", "Bro", "Mister"]
passwords = ("p@ssword", "abc123", "guest")
login_dates = ["1/1/2021","1/2/2021","1/3/2021"]
ids=[111, 222, 333]





# --------------------------------------
users = list(zip(usernames,passwords))
print("ZIP list: ", users)

# --------------------------------------
users = dict(zip(usernames,passwords))
print("ZIP dict: ", users)

# --------------------------------------
users = zip(usernames,passwords,login_dates)
print("ZIP zip: ", users) # This will give you object

# Here is inside the object
for user in users:
    print(user)

# ------------------ADVANCED--------------------
users = list(zip(ids, zip(usernames, zip(passwords, login_dates))))
print(users)
