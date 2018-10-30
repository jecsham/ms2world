module.exports = (req, res, constants) => {
    var error = new Error();
    error.status = 404;
    res.render('404', {
        gstatic: constants.gstatic,
        title: 'Error 404 - MS2World.com',
        user: req.user
    });
}