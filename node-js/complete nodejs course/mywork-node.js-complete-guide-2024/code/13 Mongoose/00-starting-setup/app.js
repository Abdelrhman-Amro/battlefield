const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
// const User = require('./models/user');

const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res, next) => {
//     User.findById('635a9e6a9bc7ce61c0b80a1d')
//         .then((user) => {
//             req.user = new User(user.name, user.email, user.cart, user._id);
//             next();
//         })
//         .catch((err) => console.log(err));
// });

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
    .connect(
        'mongodb+srv://abdelrhman:abdelrhman2003@complete-node.ib0rr.mongodb.net/shop?retryWrites=true&w=majority&appName=complete-node'
    )
    .then((result) => {
        console.log('=== connected to database and start listening ===');
        app.listen(3000);
    })
    .catch((err) => {
        console.log(err);
    });
