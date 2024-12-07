#!/usr/bin/env python3

def auth_user(role_required):
    def decorator(func):
        def wrapper(user):
            if user.get('role') == role_required:
                return func(user)
            else:
                return "Access denied!"
        return wrapper
    return decorator

@auth_user("admin")
def view_admin_dashboard(user):
    return {
        "message": "Welcome to dashboard",
        "data": user
    }

user1 = {"name": "Omar", "role": "admin"}
user2 = {"name": "Ahmed", "role": "user"}

auth_user1 = view_admin_dashboard(user1)
auth_user2 = view_admin_dashboard(user2)

print(auth_user1)
print(auth_user2)

# As you see you can use auth_user with another roles not just admin
