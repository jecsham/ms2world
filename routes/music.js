const constants = require("./constants.js");

constants.router.get('/guides', (req, res) => {
    res.render('guides', {
        gstatic: constants.gstatic,
        title: 'Music - MS2World.com'
    });
});

module.exports = constants.router;