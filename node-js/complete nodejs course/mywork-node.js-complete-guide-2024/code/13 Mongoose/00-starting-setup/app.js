const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const User = require('./models/user');

const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    User.findById('672cd6d64a801a43686e1339')
        .then((user) => {
            req.user = user;
            console.log('#user added to req');
            next();
        })
        .catch((err) => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
    .connect(
        'mongodb+srv://abdelrhman:abdelrhman2003@complete-node.ib0rr.mongodb.net/shop?retryWrites=true&w=majority&appName=complete-node'
    )
    .then((result) => {
        console.log('=== connected to database and start listening ===');

        // create first user for testing
        User.findOne().then((user) => {
            if (!user) {
                const user = new User({
                    name: 'Max',
                    email: 'max@test.com',
                    cart: { items: [] },
                });
                user.save();
                console.log('#first user created');
            }
        });
        app.listen(3000);
    })
    .catch((err) => {
        console.log(err);
    });
