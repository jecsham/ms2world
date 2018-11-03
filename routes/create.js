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
                    res.send({ error: false, id: doc._id });
                });
            } else {
                res.status(500).send({ error: constants.es.big_content });
            }
        } else {
            res.status(500).send({ error: constants.es.login });
        }
    });

    app.get('/create-build/:class', (req, res) => {
        var class_name = constants.sanitize(req.params.class);
        constants.Build_template.findOne({ class_name: class_name }, {_id:0, class_name: 0}, (err, doc) => {
            if(err) return res.render('/'); 
            res.render('create-build', {
                gstatic: constants.gstatic,
                title: 'MS2World.net: Create a Build for ',
                user: req.user,
                cstatic: cstatic,
                class: doc.data_object,
                whichPartial: () => "sb/"+class_name
            });
        })
    });
}
