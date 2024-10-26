const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

// Get the shop page
router.get('/', shopController.getIndex);

// Get the products page
router.get('/products', shopController.getProducts);
router.get('/products/:productId', shopController.getProduct)

// Get the cart page
router.get('/cart', shopController.getCart);
router.post('/cart', shopController.addToCart)

// Get the orders page
router.get('/orders', shopController.getOrders);

// Get the checkout page
router.get('/checkout', shopController.getCheckout);

module.exports = router;
