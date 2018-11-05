module.exports = (app, constants) => {
    var cstatic = ['<link rel="stylesheet" href="/css/simplemde.css">', '<link rel="stylesheet" href="/css/tagify.css">', '<link rel="stylesheet" href="/css/skillbuilder.css">', '<script src="/js/simplemde.js"></script>', '<script src="/js/jQuery.tagify.js"></script>'];

    app.get('/create-guide', (req, res) => {
        if (req.user) {
            res.render('create-guide', {
                gstatic: constants.gstatic,
                title: 'Create - MS2World.com',
                user: req.user,
                cstatic: cstatic
            });
        } else {
            res.redirect('/');
        }
    });

    app.post('/create-guide/submit', (req, res) => {
        if (req.user) {
            if (req.body.title.length <= 150 && req.body.description.length <= 300 && req.body.content.length <= 800000 && req.body.tags[0].length <= 20) {
                var data = {};
                data.title = constants.sanitize(req.body.title);
                data.description = constants.sanitize(req.body.description);
                data.content = constants.sanitize(req.body.content);
                data.sid = constants.sanitize(req.user.steamid);
                data.tags = constants.sanitize(req.body.tags);
                data.date_create = new Date();
                constants.Post_guide.create(data, (err, doc) => {
                    if (err) return res.status(500).send({ error: constants.es.internal });
                    return res.send({ error: false, id: doc._id });
                });
            } else {
                return res.status(500).send({ error: constants.es.big_content });
            }
        } else {
            return res.status(500).send({ error: constants.es.login });
        }
    });

    app.post('/create-build/submit', (req, res) => {
        if (req.user) {
            var data = {};
            if (req.body.title.length <= 150 && req.body.description.length <= 300) {
                data.data_object = constants.sanitize(req.body.data_object)
                data.title = constants.sanitize(req.body.title)
                data.description = constants.sanitize(req.body.description);
                data.type = constants.sanitize(req.body.type)
                data.sid = constants.sanitize(req.user.steamid);
                data.date_create = new Date();
                constants.Post_build.create(data, (err, doc) => {
                    if (err) return res.status(500).send({ error: constants.es.internal });
                    return res.send({ error: false, id: doc._id });
                });
            } else {
                return res.status(500).send({ error: constants.es.big_content });
            }
        } else {
            return res.status(500).send({ error: constants.es.login });
        }
    });

    app.get(['/create-build', '/create-build/:class'], (req, res) => {
        var class_name;
        if (req.params.class === undefined) class_name = "knight"
        else class_name = constants.sanitize(req.params.class);

        constants.Build_template.find({}, { _id: 0, data_object: 0 }, (err, classname) => {
            if (err) return res.render('404');
            constants.Build_template.findOne({ class_name: class_name }, { _id: 0, class_name: 0 }, (err, doc) => {
                if (!doc) return res.render('404')
                res.render('create-build', {
                    gstatic: constants.gstatic,
                    title: 'MS2World.net: Create a Build for ',
                    user: req.user,
                    cstatic: cstatic,
                    class: doc.data_object,
                    classname: classname,
                    whichPartial: () => "sb/" + class_name
                });
            })
        })
    });
}

