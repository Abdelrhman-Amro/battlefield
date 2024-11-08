const mongoose = require('mongoose');
const Product = require('./product');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    cart: {
        items: [
            {
                productId: {
                    type: Schema.Types.ObjectId,
                    ref: 'Product',
                    required: true,
                },
                quantity: { type: Number, required: true },
            },
        ],
    },
});

// add product to cart items
// if product exist
// // increase the quantity by 1
// if not
// add the product id to the cart and iniate the quantity by 1
userSchema.methods.addToCart = function (product) {
    const cartItems = this.cart.items;
    const cartProductIndex = cartItems.findIndex((cartItem) => {
        return cartItem.productId.toString() === product._id.toString();
    });

    if (cartProductIndex >= 0) {
        cartItems[cartProductIndex].quantity += 1;
    } else {
        cartItems.push({
            productId: product._id,
            quantity: 1,
        });
    }
    return this.save();
};

userSchema.methods.removeFromCart = function (productId) {
    // console.log(`product id: ${productId}`);
    const updatedCartItems = this.cart.items.filter((item) => {
        return item.productId.toString() !== productId.toString();
    });
    this.cart.items = updatedCartItems;
    // console.log(`############${this.cart.items}##############`);
    // console.log(`############${updatedCartItems}##############`);
    return this.save();
};

userSchema.methods.clearCart = function () {
    this.cart.items = [];
    return this.save();
};
module.exports = mongoose.model('User', userSchema);
