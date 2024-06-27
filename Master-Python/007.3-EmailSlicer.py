#!/usr/bin/env python3

email = input("Enter your email: ")

username = email[:email.index("@")]
domain = email[email.index("@") + 1:]

print(f"Username ->{username}\nDomain ->{domain}")
