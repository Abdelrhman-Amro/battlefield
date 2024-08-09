#!/usr/bin/env python3

credit_number = "1234-5678-9012-3456"

digits = credit_number[0:4]
print(f"{digits}-XXXX-XXXX-XXXX")

digits = credit_number[5:9]
print(f"XXXX-{digits}-XXXX-XXXX")

digits = credit_number[-9:-5]
print(f"XXXX-XXXX-{digits}-XXXX")

digits = credit_number[-4:]
print(f"XXXX-XXXX-XXXX-{digits}")

digits = credit_number[::5]
print("First digits: {}XXX-{}XXX-{}XXX-{}XXX"
      .format(digits[0], digits[1], digits[2], digits[3]))

digits = str(credit_number[::-1])
print(f"Revers the number: {digits}")
