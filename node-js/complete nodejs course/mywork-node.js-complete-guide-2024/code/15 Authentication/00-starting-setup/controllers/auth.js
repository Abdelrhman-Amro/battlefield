const { render } = require('ejs');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const crypto = require('crypto');
const User = require('../models/user');

const transporter = nodemailer.createTransport(
    sendgridTransport({
        auth: {
            api_key:
                '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',
        },
    })
);

exports.getLogin = (req, res, next) => {
    let message = req.flash('error');

    if (message.length > 0) {
        message = message[0];
    } else {
        message = null;
    }
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        errorMessage: message,
    });
};

exports.getSignup = (req, res, next) => {
    let message = req.flash('error');

    if (message.length > 0) {
        message = message[0];
    } else {
        message = null;
    }
    res.render('auth/signup', {
        path: '/signup',
        pageTitle: 'Signup',
        errorMessage: message,
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
                req.flash('error', 'Invalid email.');
                return res.redirect('/login');
            }
            bcrypt.compare(password, user.password).then((doMatch) => {
                // if password is wrong
                if (!doMatch) {
                    console.log('Wrong Passowrd!!');
                    req.flash('error', 'Invalid password.');
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
                req.flash(
                    'error',
                    'E-Mail exists already, please pick a different one.'
                );
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
                })
                .then(() => {
                    return transporter.sendMail({
                        to: email,
                        from: 'abdamro289@hotmail.com',
                        subject: 'Signup Succeeded!',
                        // text: 'Hello there, I am text.', just one will appear test or html
                        html: '<h1> HTML IS HERE </h1>',
                    });
                })
                .catch((err) => {
                    console.log(err);
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

exports.getReset = (req, res, next) => {
    let message = req.flash('error');

    if (message.length > 0) {
        message = message[0];
    } else {
        message = null;
    }
    res.render('auth/reset', {
        path: '/reset',
        pageTitle: 'Reset Password',
        errorMessage: message,
    });
};

exports.postReset = (req, res, next) => {
    // generate token
    crypto.randomBytes(32, (err, buffer) => {
        if (err) {
            console.log(err);
            return res.redirect('/reset');
        }
        // set token
        const token = buffer.toString('hex');
        // looking for email
        User.findOne({ email: req.body.email })
            .then((user) => {
                // if email not exist
                if (!user) {
                    req.flash('error', "Email Doesn't Exist");
                    return res.redirect('/reset');
                }
                // initialize the token to user
                user.resetToken = token;
                user.resetTokenExpiration = Date.now() + 3600000;
                //save the token to user / and now render / and send email to reset password
                return user
                    .save()
                    .then((result) => {
                        return res.redirect('/');
                    })
                    .then(() => {
                        transporter.sendMail({
                            to: user.email,
                            from: 'abdamro289@hotmail.com',
                            subject: 'Password-Reset',
                            html: `
                                <p>for password reseting click here ---><a href="http://localhost:3000/password-reset/${token}">reset-password</a></P>
                        `,
                        });
                    })
                    .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
    });
};

exports.getNewPassword = (req, res, next) => {
    const token = req.params.token;
    User.findOne({
        resetToken: token,
        resetTokenExpiration: { $gt: Date.now() },
    })
        .then((user) => {
            // block if there is any error message
            let message = req.flash('error');
            if (message.length > 0) {
                message = message[0];
            } else {
                message = null;
            }
            // render new-password page
            res.render('auth/new-password', {
                path: '/new-password',
                pageTitle: 'New Password',
                errorMessage: message,
                userId: user.id.toString(),
                newPasswordToken: token,
            });
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.postNewPassword = (req, res, next) => {
    const newPassword = req.body.password;
    const userId = req.body.userId;
    const newPasswordToken = req.body.newPasswordToken;
    let resetUser; // to reach users in any scope

    User.findOne({
        _id: userId,
        resetToken: newPasswordToken,
        resetTokenExpiration: { $gt: Date.now() },
    })
        .then((user) => {
            resetUser = user;
            return bcrypt.hash(newPassword, 12);
        })
        .then((hashedPassword) => {
            resetUser.password = hashedPassword;
            resetUser.resetToken = undefined;
            resetUser.resetTokenExpiration = undefined;
            return resetUser.save();
        })
        .then((result) => {
            res.redirect('/login');
        })
        .catch((err) => {
            console.log(err);
        });
};
