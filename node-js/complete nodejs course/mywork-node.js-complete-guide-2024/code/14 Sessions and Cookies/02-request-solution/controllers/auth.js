exports.getLogin = (req, res, next) => {
    const isLoggedIn = req.get('Cookie').split('=')[1] === 'true';
    console.log('LoggedIn?', isLoggedIn);
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: isLoggedIn,
    });
};

exports.postLogin = (req, res, next) => {
    // req.isLoggedIn = true;
    res.setHeader('Set-Cookie', 'loggedIn=true');
    res.redirect('/');
};
