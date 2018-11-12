module.exports = (app, constants) => {
    
    app.get('/privacy', (req, res) => {
        res.render('privacy', {
            gstatic: constants.gstatic,
            title: 'Privacy - '+constants.title,
            user: req.user,
        });
    });
    app.get('/contact', (req, res) => {
        res.render('contact', {
            gstatic: constants.gstatic,
            title: 'Contact - '+constants.title,
            user: req.user,
        });
    });
}