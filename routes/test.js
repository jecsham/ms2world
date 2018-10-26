const constants = require("./constants.js");

constants.router.get('/test', (req, res) => {
    res.render('test', {
        gstatic: constants.gstatic,
        title: 'Test - MS2World.com',
        user: req.user
    });
});

module.exports = constants.router;