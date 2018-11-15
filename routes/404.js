module.exports = (req, res, constants) => {
    let error = new Error();
    error.status = 404;
    res.render('404', {
        gstatic: constants.gstatic,
        title: 'Error 404 - '+constants.title,
        user: req.user
    });
}