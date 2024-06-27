#!/usr/bin/env python3

# Add line numbers to a file

input_file = "Without_Numbers"
output_file = "With_Numbers"

with open(input_file, 'r') as f:
    lines = f.readlines()

# Numbering the lines
numbered_lines = [f"#{i+1}. {line}" for i, line in enumerate(lines)]

with open(output_file, 'w') as f:
    f.writelines(numbered_lines)
