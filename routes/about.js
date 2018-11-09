module.exports = (app, constants) => {
    
    app.get('/privacy', (req, res) => {
        res.render('privacy', {
            gstatic: constants.gstatic,
            title: 'MS2World.net - Privacy',
            user: req.user,
        });
    });
    app.get('/contact', (req, res) => {
        res.render('contact', {
            gstatic: constants.gstatic,
            title: 'MS2World.net - CSontact',
            user: req.user,
        });
    });
}