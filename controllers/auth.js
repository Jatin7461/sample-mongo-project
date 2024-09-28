
exports.getLogin = (req, res, next) => {
    res.render('auth/login',
        {
            path: '/login',
            pageTitle: 'login',
            isAuthenticated: req.isLoggedIn
        })
}

exports.postLogin = (req, res, next) => {
    console.log('redirecting to /')
    req.session.isLoggedIn = true
    res.redirect('/');
}