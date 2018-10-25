const constants = require("./constants.js");

constants.router.get(['/','/index','/home'], (req, res) => {
    res.render('index', {
        gstatic: constants.gstatic,
        title: 'Home - MS2World.com'
    });
});

module.exports = constants.router;
