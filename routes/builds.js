const constants = require("./constants.js");

constants.router.get('/builds', (req, res) => {
    constants.Ms2_class.find({}, null, { sort: { name: 1 } }, (err, classes) => {
        var classesMap = {};
        classes.forEach((element) => {
            classesMap[element._id] = element;
        });
        res.render('builds', {
            gstatic: constants.gstatic,
            title: 'Builds - MS2World.com',
            user: req.user,
            classes: classesMap
        });
    });
});
constants.router.get('/builds/:class', (req, res) => {
    res.render('builds', {
        gstatic: constants.gstatic,
        title: `${req.params.class.toUppercase()} Builds - MS2World.com`,
        user: req.user
    });
});
constants.router.get('/builds/:class/popular', (req, res) => {
    res.render('builds', {
        gstatic: constants.gstatic,
        title: 'Builds - MS2World.com',
        user: req.user
    });
});
constants.router.get('/builds/:class/recent', (req, res) => {
    res.render('builds', {
        gstatic: constants.gstatic,
        title: 'Builds - MS2World.com',
        user: req.user
    });
});

module.exports = constants.router;