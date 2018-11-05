
module.exports = (app, constants) => {

    cstatic = ['<link rel="stylesheet" href="/css/skillbuilder.css">'];

    app.get('/builds', (req, res) => {
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

    app.get('/builds/:class', (req, res) => {
        res.render('builds', {
            gstatic: constants.gstatic,
            title: `${req.params.class.toUppercase()} Builds - MS2World.com`,
            user: req.user
        });
    });

    app.get('/builds/:class/popular', (req, res) => {
        res.render('builds', {
            gstatic: constants.gstatic,
            title: 'Builds - MS2World.com',
            user: req.user
        });
    });

    app.get('/builds/:class/recent', (req, res) => {
        res.render('builds', {
            gstatic: constants.gstatic,
            title: 'Builds - MS2World.com',
            user: req.user
        });
    });

    app.get('/build/:id', (req, res) => {
        var buildid = constants.sanitize(req.params.id);
        constants.Post_build.findOne({ '_id': buildid }, (err, data) => {
            if (err) return res.render('404');
            constants.steamapi.getUserSummary(data.sid).then(summary => {
                data.author = summary.nickname;
                constants.Build_template.findOne({ class_name: data.class_name }, { _id: 0, class_name: 0 }, (err, doc) => {
                    if (!doc) return res.render('404')
                    res.render('build', {
                        gstatic: constants.gstatic,
                        title: 'MS2World.net: ' + data.title,
                        build: data,
                        user: req.user,
                        class: doc.data_object,
                        cstatic: cstatic,
                        whichPartial: () => "sb/" + data.class_name
                    })
                });
            })
                .catch(err => {
                    res.status(500).render('error');
                })
        });
    });
}
