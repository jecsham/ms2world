module.exports = (app, constants) => {
    var cstatic = ['<link rel="stylesheet" href="/css/simplemde.css">', '<link rel="stylesheet" href="/css/tagify.css">', '<script src="/js/simplemde.js"></script>', '<script src="/js/jQuery.tagify.js"></script>'];

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
        if(req.user){
            if (req.body.title.length <= 150 && req.body.description.length <= 300 && req.body.content.length <= 800000 && req.body.tags[0].length <= 20) {
                var data = {};
                data.title = constants.sanitize(req.body.title);
                data.description = constants.sanitize(req.body.description);
                data.content = constants.sanitize(req.body.content);
                data.sid = constants.sanitize(req.user.steamid);
                data.tags = req.body.tags;
                data.date_create = new Date();
                constants.Post_guide.create(data, (err, doc) => {
                    if (err) return res.status(500).send({ error: constants.es.internal });
                    res.send({ error: false, id: doc._id});
                });
            } else {
                res.status(500).send({ error: constants.es.big_content });
            }
        }else{
            res.status(500).send({ error: constants.es.login });
        }
    });

    app.get('/create-build/:class', (req, res) => {
        if (req.user) {
            res.render('create-build', {
                gstatic: constants.gstatic,
                title: 'Create - MS2World.com',
                user: req.user,
                cstatic: cstatic
            });
        } else {
            res.redirect('/');
        }
    });
}
