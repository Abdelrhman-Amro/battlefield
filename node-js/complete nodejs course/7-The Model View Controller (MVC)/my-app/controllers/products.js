const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {

}

exports.postAddProduct = (req, res, next) => {

}

exports.getProucts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop', {
            prods: products,
            pageTitle: 'shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        })
    })
}
