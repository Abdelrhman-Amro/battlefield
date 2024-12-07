const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    User.findByPk(1)
        .then((user) => {
            req.user = user;
            next();
        })
        .catch((err) => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// 1:n
Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);

// 1:1
Cart.belongsTo(User);
User.hasOne(Cart);

// n:n
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

sequelize
    // .sync({ force: true })
    .sync()
    .then((result) => {
        return User.findByPk(1);
        // console.log(result);
    })
    .then((user) => {
        if (!user) {
            return User.create({ name: 'Max', email: 'test@test.com' });
        }
        return user;
    })
    .then((user) => {
        return user.getCart().then((cart) => {
            if (!cart) {
                return user.createCart();
            }
            return cart;
        });
    })
    .then((cart) => {
        // console.log(cart);
        app.listen(3000);
    })
    .catch((err) => {
        console.log(err);
    });
// create cart model
// create cart-item model

// Setup model-relations
// user hasone cart
// cart belongs to user
