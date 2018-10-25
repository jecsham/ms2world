const constants = require("./constants.js");

module.exports = (req, res, next) => {
    var error = new Error();
    error.status = 404;
    res.render('404', {
        gstatic: constants.gstatic,
        title: 'Error 404 - MS2World.com',
        user: req.user
    });
}