// core packages
const path = require('path');

// third-part packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const csrf = require('csurf');
const flash = require('connect-flash');

// app packages
const User = require('./models/user');

// initialize the app
const app = express();

// setup database
const MONGODB_URI =
    'mongodb+srv://abdelrhman:abdelrhman2003@complete-node.ib0rr.mongodb.net/shop?retryWrites=true&w=majority&appName=complete-node';
const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions',
});

// ########## (setup server configuration) start ########## //
const csrfProtection = csrf();

app.set('view engine', 'ejs');
app.set('views', 'views');
// ########## (setup server configuration) finished ########## //

// ########## (setup middlewares) start ########## //
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    session({
        secret: 'my secret',
        resave: false,
        saveUninitialized: false,
        store: store,
    })
);

app.use(csrfProtection);

// to use that flash middleware anywhere in our application on the request object.
app.use(flash());

app.use((req, res, next) => {
    if (!req.session.user) {
        return next();
    }
    User.findById(req.session.user._id)
        .then((user) => {
            req.user = user;
            next();
        })
        .catch((err) => console.log(err));
});

// this middleware set these two fields will be set for the views that are rendered
app.use((req, res, next) => {
    res.locals.isAuthenticated = req.session.isLoggedIn;
    res.locals.csrfToken = req.csrfToken();
    next();
});
// ########## (setup middlewares) finished ########## //

// ########## (setup routes) start ########## //
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

const errorController = require('./controllers/error');
app.use(errorController.get404);
// ########## (setup routes) finished ########## //

// connect to db and run the app
mongoose
    .connect(MONGODB_URI)
    .then((result) => {
        app.listen(3000);
    })
    .catch((err) => {
        console.log(err);
    });
