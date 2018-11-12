module.exports = (app, constants) => {
    app.get('/redirect', (req, res) => {
            res.render('redirect', {
                title: 'Redirecting... - '+constants.title,
            });
        });
}