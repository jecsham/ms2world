module.exports = (app, constants) => {

    app.get('/donate', async (req, res) => {
        let messages = await constants.messages()
        res.render('donate', {
            messages: messages,
            gstatic: constants.gstatic,
            title: 'Donate ❤ - ' + constants.title,
            user: req.user,
        });
    });

    app.get('/createdonation', (req, res) => {
        res.redirect('https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BYK7HZ3YKA4Y4&source=url');
    });
}