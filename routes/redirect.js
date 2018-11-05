module.exports = (app, constants) => {
    app.get('/redirect', (req, res) => {
            res.render('redirect', {
                title: 'MS2World.net: Redirecting...',
            });
        });
}