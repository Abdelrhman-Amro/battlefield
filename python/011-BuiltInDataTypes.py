#!/usr/bin/env python3

# A task to Do ->> Build mind map❌

##### Key Differences #####
# lists []
    # Mutable Ordered Duplication Indexing
# Sets {}
    # Mutable Unordered NoDuplication NoIndexing
# Tuples ()
    # Immutable Ordered Duplication Indexing
# Dictionaries {:}
    # Mutable Unordered NoDuplication(unique-key) NoIndexing(key-based)

##### Definitions #####
# list
    # An ordered collection of items that can be modified.
# set
    # An unordered collection of unique items that cannot be modified once created.
# tuple
    # An ordered collection of immutable items that cannot be modified once created.
# dictionary
    #  An unordered collection of key-value pairs, where each key is unique and associated with a value.
    
##### Use Cases #####
# list
    # Storing multiple items that need to be accessed by index.
    # Modifying individual elements, such as adding, removing, or changing values.
# sets
    # Ensuring uniqueness of elements in a collection.
    # Performing set operations like union, intersection, and difference to manipulate collections.
# tuple
    # Storing data that should not be changed, such as coordinates or a date.
    # Returning multiple values from a function in a single, readable object.
# dictionary
    # Quick lookups based on unique keys, such as searching for a name in a phone book.
    # Storing related data together in a structured format, like user information with keys for name, age, and email.

##### Functions #####
print("List functions:")    
print([f for f in dir(list) if not f.startswith('__')], "\n")
print("Set functions:")
print([f for f in dir(set) if not f.startswith('__')], "\n")
print("Tuple functions:")
print([f for f in dir(tuple) if not f.startswith('__')], "\n")
print("Dictionary functions:")
print([f for f in dir(dict) if not f.startswith('__')], "\n")

###### 👇👇For More Details Check that👇👇 #####

###### To Get Full List Of Functions & Attributes #####
# print(dir(list))
# print(dir(set))
# print(dir(tuple))
# print(dir(dict))

###### To Get Full Details (You can see here the usage of each function) #####
# print(help(list))
# print(help(set))
# print(help(tuple))
# print(help(dict))
