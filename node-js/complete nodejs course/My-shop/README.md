product - shop - order - cart - user
# Description
A simple api E-commerece application

# Roles
## Admin user
- **Add product**
- **Update product**
- **Delete product**

## Customer user
- **Add to cart**
- **Revmove from cart**

# Routes
## admin
- **GET**  `/admin/products`
    - render admin products page
- **GET**  `/admin/add-product`
    - render admin add-product page
- **POST** `/admin/add-product`
    - add product to databse and redirect to admin products page
- **GET**  `/admin/edit-product:productId`
    - render admin edit-product page based on the `productId`
- **POST** `/admin/edit-product`
    - Update the product with the new data and redirect to admin products page
- **POST** `admin/delete-product`
    - Delete the product from the database and redirect to admin products page

## cart
- **GET**  `/cart`
- **POST** `/cart`
- **POST** `/cart-delete-item`
- 
## orders

## checkout
