module.exports = (app, constants) => {
    app.get('/beats', (req, res) => {
        res.render('beats', {
            gstatic: constants.gstatic,
            title: 'Beats - MS2World.com'
        });
    });
}