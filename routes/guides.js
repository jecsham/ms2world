module.exports = (app, constants) => {
    app.get('/guides', (req, res) => {
        res.render('guides', {
            gstatic: constants.gstatic,
            title: 'Guides - MS2World.com',
            user: req.user
        });
    });

    app.get('/guides/popular', (req, res) => {
        res.render('guides-popular', {
            gstatic: constants.gstatic,
            title: 'Popular Guides - MS2World.com',
            user: req.user
        });
    });

    app.get('/guides/recent', (req, res) => {
        res.render('guides-recent', {
            gstatic: constants.gstatic,
            title: 'Recent Guides - MS2World.com',
            user: req.user
        });
    });
}