const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
);

class Cart {
    static addProduct(id, price) {
        let cart = {products: [], totalPrice: 0}

        // 1. read the cart storage
        fs.readFile(p, (err, content) =>{
            if (!err){
                cart = JSON.parse(content);
            }

            // 2. check the existance of the item
            const itemIdx = cart.products.findIndex(item => item.id === id);

            // 3. logic for not/exist
            if (itemIdx != -1){
                cart.products[itemIdx].qty += 1;  
            }
            else {
                cart.products.push({id: id, qty: 1})
            }
            cart.totalPrice += +price;

            // 4. store the new carts
            fs.writeFile(p, JSON.stringify(cart), (err) => {
                if (err){
                    console.log(err);
                }
            })
        })
    }
}
module.exports = Cart;

/**
 * if item exist
 *      select the item
 *      qty+1 for the item
 * 
 * else
 *      add the product to cart products
 *      qty = 1
 * totalPrice + price     
 */

// Tests

// Cart.addProduct(5, 100);
