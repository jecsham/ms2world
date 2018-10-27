const constants = require("./constants.js");
var cstatic = '<link rel="stylesheet" href="/css/simplemde.css"> <script src="/js/simplemde.js"></script>';

constants.router.get('/test', (req, res) => {
    res.render('test', {
        gstatic: constants.gstatic,
        title: 'Test - MS2World.com',
        user: req.user,
        cstatic: cstatic
    });
});

module.exports = constants.router;