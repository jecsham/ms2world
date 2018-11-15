const steam = require('steam-login');
module.exports = (app, constants) => {
    app.use(require('express-session')({ resave: false, saveUninitialized: false, secret: 'a secret' }));

    app.use(steam.middleware({
        realm: process.env.SITE_URL,
        verify: process.env.SITE_URL + 'verify',
        apiKey: process.env.STEAM_KEY
    }
    ));
    app.get('/login', steam.authenticate(), (req, res) => {
        res.redirect('/');
    });

    app.get('/verify', steam.verify(), (req, res) => {
        var username = req.user.username;
        var img = req.user.avatar.medium;
        var last_login = new Date();

        var query = {
            'sid': req.user.steamid
        }
        constants.User_account.findOneAndUpdate(query, { $set: { 'name': username, 'date_last_login': last_login, 'img': img } }, { upsert: true }, (err, doc) => {
            if (err) return res.redirect('/logout');
            return res.redirect('/redirect');
        });
    });

    app.get('/logout', steam.enforceLogin('/'), (req, res) => {
        req.logout();
        res.redirect('/');
    });
}