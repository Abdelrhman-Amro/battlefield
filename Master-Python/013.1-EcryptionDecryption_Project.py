#!/usr/bin/env python3

# Loop
    # Input: message
    # Output: Decrypted message
# Loop
    # Input: Decrypted message
    # Output: message

import string
import random

# Generate random key
chars = list(string.punctuation + string.digits + string.ascii_lowercase + string.ascii_uppercase)
key = chars.copy()
random.shuffle(key)

print("You can enter q/Q to exit.")

# Encryption
print("Encryption Mode:")
while True:
    plain = input("Enter message: ")
    if plain == "q" or plain == "Q":
        break
    cipher = ""
    for c in plain:
        # Replace each character with the corresponding character in the shuffled key
        cipher += key[chars.index(c)]
    print(f"Encrypted message: {cipher}")

# Decryption
print("Decryption Mode:")
while True:
    cipher = input("Enter cipher: ")
    if cipher == "q" or cipher == "Q":
        break
    plain = ""
    for c in cipher:
        # Replace each character with the corresponding character in the original character set
        plain += chars[key.index(c)]
    print(f"Decrypted message: {plain}")
