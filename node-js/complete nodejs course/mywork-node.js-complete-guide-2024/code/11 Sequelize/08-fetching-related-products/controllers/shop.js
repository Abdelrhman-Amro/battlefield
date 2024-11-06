const Product = require('../models/product');
const Cart = require('../models/cart');
const { where } = require('sequelize');

exports.getProducts = (req, res, next) => {
    Product.findAll()
        .then((products) => {
            res.render('shop/product-list', {
                prods: products,
                pageTitle: 'All Products',
                path: '/products',
            });
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    // Product.findAll({ where: { id: prodId } })
    //     .then((products) => {
    //         res.render('shop/product-detail', {
    //             product: products[0],
    //             pageTitle: products[0].title,
    //             path: '/products',
    //         });
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
    Product.findByPk(prodId)
        .then((product) => {
            res.render('shop/product-detail', {
                product: product,
                pageTitle: product.title,
                path: '/products',
            });
        })
        .catch((err) => console.log(err));
};

exports.getIndex = (req, res, next) => {
    Product.findAll()
        .then((products) => {
            res.render('shop/index', {
                prods: products,
                pageTitle: 'Shop',
                path: '/',
            });
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.getCart = (req, res, next) => {
    /* Algorithm
    # fetch user cart
    # get cart products
    # render cart view with products
    */

    req.user
        .getCart()
        .then((cart) => {
            return cart
                .getProducts()
                .then((products) => {
                    console.log(products);
                    res.render('shop/cart', {
                        path: '/cart',
                        pageTitle: 'Your Cart',
                        products: products,
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        })
        .catch((err) => console.log(err));
};

/**
 * add product to user cart
 * if the product exist increase qty by 1
 * if not -> add it to cart then iniate qty by 1
 */
exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    let fetchedCart;
    let newQuantity = 1;
    req.user
        .getCart()
        .then((cart) => {
            fetchedCart = cart;
            return cart.getProducts({ where: { id: prodId } }); // fetch the new produc from cart if existed
        })
        .then((products) => {
            if (products.length > 0) {
                newQuantity = products[0].cartItem.qty + 1;
                return products[0];
            } else {
                return Product.findByPk(prodId);
            }
        })
        .then((product) => {
            return fetchedCart.addProduct(product, {
                through: { qty: newQuantity },
            });
        })
        .then(() => {
            console.log('Cart Updated');
            res.redirect('/cart');
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.postCartDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, (product) => {
        Cart.deleteProduct(prodId, product.price);
        res.redirect('/cart');
    });
};

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders',
    });
};

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout',
    });
};

// create order model
// create order-item model
// build orderNow btn in cart view