const mongoose = require('mongoose');

// Initiate the schema
const Schema = mongoose.Schema;

// Build schema
const productSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
});

// Define the model
module.exports = mongoose.model('Product', productSchema);
