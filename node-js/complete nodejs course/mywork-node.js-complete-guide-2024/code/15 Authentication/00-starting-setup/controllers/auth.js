const { render } = require('ejs');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

exports.getLogin = (req, res, next) => {
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: req.session.isLoggedIn,
    });
};

exports.getSignup = (req, res, next) => {
    res.render('auth/signup', {
        path: '/signup',
        pageTitle: 'Signup',
        isAuthenticated: false,
    });
};

exports.postLogin = (req, res, next) => {
    // initialize user data
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email: email })
        .then((user) => {
            // if email doesn't exist
            if (!user) {
                console.log("Email Doesn't Exist!!");
                return res.redirect('/login');
            }
            bcrypt.compare(password, user.password).then((doMatch) => {
                // if password is wrong
                if (!doMatch) {
                    console.log('Wrong Passowrd!!');
                    return res.redirect('/login');
                }
                req.session.isLoggedIn = true;
                req.session.user = user;
                req.session.save((err) => {
                    console.log(err);
                    res.redirect('/');
                });
            });
        })
        .catch((err) => console.log(err));
};

exports.postSignup = (req, res, next) => {
    // initialize user data
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    // create a new user logic
    User.findOne({ email: email })
        .then((userDoc) => {
            // if email is already exist
            if (userDoc) {
                return res.redirect('/signup');
            }
            return bcrypt
                .hash(password, 12)
                .then((hashedPassword) => {
                    console.log('XXXXXXXXXXX BLOCK TNT XXXXXXXXXXX');
                    // create new user
                    const user = new User({
                        email: email,
                        password: hashedPassword,
                        cart: { items: [] },
                    });
                    return user.save();
                })
                .then((result) => {
                    return res.redirect('/login');
                });
        })
        .catch((err) => {
            console.log(err);
        });
    // create new user
};

exports.postLogout = (req, res, next) => {
    req.session.destroy((err) => {
        console.log(err);
        res.redirect('/');
    });
};
