const User = require('../models/user');
exports.getLogin = (req, res, next) => {
    // const isLoggedIn = req.get('Cookie').split('=')[1] === 'true';
    // console.log('LoggedIn?', isLoggedIn);
    console.log(req.session);

    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: true,
    });
};

exports.postLogin = (req, res, next) => {
    // req.isLoggedIn = true;
    // res.setHeader('Set-Cookie', 'loggedIn=true');
    req.session.isLoggedIn = true;
    req.session.isLoggedOut = true;

    User.findById('6606e689fb4c4cbf7dd95380')
        .then((user) => {
            req.session.user = user;
            res.redirect('/');
        })
        .catch((err) => console.log(err));
};
