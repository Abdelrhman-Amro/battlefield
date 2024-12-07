#!/usr/bin/env python3
from dotenv import load_dotenv, dotenv_values
import os

# Load the environment variables
load_dotenv() # this loads the .env file ONLY

# Print the environment variables
print(os.getenv("KEY"))
print(os.getenv("REMOTE"))
print(type(os.getenv("PORT"))) # This is not an integer

print("\nAnother Method:")

# Load the environment variables
env_vars = dotenv_values(".env") # this loads the .env file and any file

# Print the environment variables
print(env_vars)
print(type(env_vars))
print(env_vars["KEY"])
print(env_vars["REMOTE"])

env_vars = dotenv_values(".envGG")
print(env_vars)
dic = {**dotenv_values(".envGG")}
print(dic)
print(type(dic))
print(dic['GG'])
print(dic['VIP'])
