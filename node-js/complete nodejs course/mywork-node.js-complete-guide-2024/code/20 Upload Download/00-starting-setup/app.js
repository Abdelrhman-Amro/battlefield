// #################### (setup packages) start #################### //
// core packages
const path = require('path');

// third-party packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
/** csrf packages */
const { doubleCsrf } = require('csrf-csrf');
const cookieParser = require('cookie-parser');
/** ================ */
const flash = require('connect-flash');
const multer = require('multer');

// local packages
const errorController = require('./controllers/error');
const User = require('./models/user');
// #################### (setup packages) finished #################### //

// #################### (setup server configuration) start #################### //
// iniate app
const app = express();

// initiate mongodb_uri
const MONGODB_URI =
    'mongodb+srv://abdelrhman:abdelrhman2003@complete-node.ib0rr.mongodb.net/shop?retryWrites=true&w=majority&appName=complete-node';

// setup sesssions storage
const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions',
});

// setup csrfProtection
const csrfProtection = doubleCsrf({
    getSecret: () => 'supersecret-min-32-chars-long-secret-key', // Make this longer and more secure
    cookieName: 'x-csrf-token', // Name of the cookie to be set
    cookieOptions: {
        httpOnly: true,
        sameSite: 'lax', // Changed from strict to lax to allow more common use cases
        secure: process.env.NODE_ENV === 'production', // Only use secure in production
        signed: true, // Since you're using signed cookies
    },
    size: 64, // Token length
    getTokenFromRequest: (req) => req.body._csrf,
});

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '--' + file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpeg' ||
        file.mimetype === 'image/jpg'
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};
// setup views
app.set('view engine', 'ejs');
app.set('views', 'views');
// #################### (setup server configuration) finished #################### //

// #################### (setup middlewares) start #################### //
/** Essentials setup */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
    multer({ storage: fileStorage, fileFilter: fileFilter }).single('image')
);
app.use(express.static(path.join(__dirname, 'public')));
/** ================ */

// session setup
app.use(
    session({
        secret: 'my secret',
        resave: false,
        saveUninitialized: false,
        store: store,
    })
);

// csrf setup
app.use(cookieParser('supersecret-min-32-chars-long-secret-key')); // Use the same secret as CSRF
app.use(csrfProtection.doubleCsrfProtection);

// flash messages setup
app.use(flash());

// local variables setup
app.use((req, res, next) => {
    res.locals.isAuthenticated = req.session.isLoggedIn;
    res.locals.csrfToken = req.csrfToken();
    next();
});

/** User setup */
app.use((req, res, next) => {
    // throw new Error('Sync Dummy');
    if (!req.session.user) {
        return next();
    }
    User.findById(req.session.user._id)
        .then((user) => {
            if (!user) {
                return next();
            }
            req.user = user;
            next();
        })
        .catch((err) => {
            next(new Error(err));
        });
});
/** ================ */
// #################### (setup middlewares) finished #################### //

// #################### (setup routes) start #################### //
/** Main routes */
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);
/** ================ */

/** Error routes */
app.get('/500', errorController.get500);

app.use(errorController.get404);

app.use((error, req, res, next) => {
    // res.status(error.httpStatusCode).render(....)
    // res.redirect('/500');
    res.status(500).render('500', {
        pageTitle: 'Error!',
        path: '/500',
        isAuthenticated: req.session.isLoggedIn,
    });
});
/** ================ */
// #################### (setup routes) finished #################### //

/** Connect to database and run the app */
mongoose
    .connect(MONGODB_URI)
    .then((result) => {
        app.listen(3000);
    })
    .catch((err) => {
        console.log(err);
    });
/** ================ */
