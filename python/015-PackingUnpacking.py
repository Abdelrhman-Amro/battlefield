#!/usr/bin/env python3

# Tags: packing - unpacking - Extend unpacking

# Packing is the process of combining multiple values into a single container. 
packed = 1, 2, 3, 4, 5 # ⚠️⚠️Take Care that the packed by default is a tuple.
print("Packed Type:", type(packed)) 
print("Packed:", packed)  

# Unpacking is the process of extracting values from a packed container and assigning them to individual variables. 
up1, up2, up3, up4, up5 = packed # up -> unpacked
print("Unpacked:", *packed)  
print(f"Unpacked: {up1}, {up2}, {up3}, {up4}, {up5}")  

# Extended Unpacking
# Use the * operator to extend the unpacking process.
# This allows you to unpack values from a packed container and assign them to multiple variables
# including a rest variable that catches any remaining values.
packed_list = [1, 2, 3, 4, 5, 6]
a, *b, c = packed_list
print("a:", a)  # Output: 1
print("b:", b)  # Output: [2, 3, 4, 5]
print("c:", c)  # Output: 6
