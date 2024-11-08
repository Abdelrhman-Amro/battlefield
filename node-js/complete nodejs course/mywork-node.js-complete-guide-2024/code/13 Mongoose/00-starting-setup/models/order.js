const mongoose = require('mongoose');
const product = require('./product');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    products: [
        {
            product: { type: Object, required: true },
            quantity: { type: Number, required: true },
        },
    ],
    user: {
        name: {
            type: String,
            required: true,
        },
        userId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
    },
});

module.exports = mongoose.model('Order', orderSchema);

/**
 * orderSchema:{_id, userId, userItems}
 */
// -> add order
// -> get order

// for orders
// create new order related to user
// order
// // _id - userId - userItems
