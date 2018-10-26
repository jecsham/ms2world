const constants = require("./constants.js");

constants.router.get('/beats', (req, res) => {
    res.render('beats', {
        gstatic: constants.gstatic,
        title: 'Beats - MS2World.com'
    });
});

module.exports = constants.router;