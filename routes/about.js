module.exports = (app, constants) => {

    app.get('/privacy', async (req, res) => {
        let messages = await constants.messages()
        res.render('privacy', {
            messages: messages,
            gstatic: constants.gstatic,
            title: 'Privacy - ' + constants.title,
            user: req.user,
        });
    });
    app.get('/contact', async (req, res) => {
        let messages = await constants.messages()
        res.render('contact', {
            messages: messages,
            gstatic: constants.gstatic,
            title: 'Contact - ' + constants.title,
            user: req.user,
        });
    });
}