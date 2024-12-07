#!/usr/bin/env python3
# ***********************************
# if _name_ == '__main__'
# ***********************************

# WHY?
# 1. Module can be run as a standalone program
# or
# 2. Module can be imported and used by other modules

# Python interpreter sets "special variables", one of which is _name_
# Python will assign the _name_ variable a value of '__main__' if it's
# the initial module being run

def main():
    print("Hello!")


# This is the only way to run this file as a standalone program
if __name__ == '__main__':
    main()
    print(f"This will be [{__name__}] Because i am running this file")
    import math
    print(f"But with imported modules will be the name of module [{math.__name__}]")
