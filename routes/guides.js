const constants = require("./constants.js");

constants.router.get('/guides', (req, res) => {
    res.render('guides', {
        gstatic: constants.gstatic,
        title: 'Guides - MS2World.com',
        user: req.user
    });
});

module.exports = constants.router;