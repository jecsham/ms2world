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
                data.author = req.user.username;
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
                data.class_name = constants.sanitize(req.body.class_name)
                data.title = constants.sanitize(req.body.title)
                data.description = constants.sanitize(req.body.description);
                data.type = constants.sanitize(req.body.type)
                data.sid = constants.sanitize(req.user.steamid);
                data.date_create = new Date();
                data.author = req.user.username;
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

    app.post('/vote', (req, res) => {
        if (req.user) {
            var usersid = req.user.steamid;
            var postid = constants.sanitize(req.body.postid)
            var type = constants.sanitize(req.body.type);
            var post = constants.sanitize(req.body.post);
            var option = {};
            if (type === 'up') {
                option.user = { $addToSet: { votes: postid } }
                option.post = { $addToSet: { votes: usersid } }
            }
            else if (type === 'down') {
                option.user = { $unset: { votes: postid } }
                option.post = { $unset: { votes: usersid } }
            }

            constants.User_account.findOneAndUpdate({ sid: usersid }, option.user, (err) => {
                if (err) return res.status(500).send({ error: constants.es.internal });
            });

            if (post === 'guide') {
                constants.Post_guide.findOneAndUpdate({ _id: postid }, option.post, (err) => {
                    if (err) return console.log(err);
                    res.send({ error: false });
                })
                constants.Post_guide.findOne({ _id: postid }, 'votes', (err, doc) => {
                    constants.Post_guide.findOneAndUpdate({ _id: postid }, { $set: { voteCount: doc.votes.length } }, err => {
                        if (err) return res.status(500).send({ error: constants.es.internal });
                    })
                })
            } else if (post === 'build') {
                constants.Post_build.findOneAndUpdate({ _id: postid }, option.post, (err) => {
                    if (err) return res.status(500).send({ error: constants.es.internal });
                    res.send({ error: false });
                })
                constants.Post_build.findOne({ _id: postid }, 'votes', (err, doc) => {
                    constants.Post_build.findOneAndUpdate({ _id: postid }, { $set: { voteCount: doc.votes.length } }, err => {
                        if (err) return res.status(500).send({ error: constants.es.internal });
                    })
                })
            }
        }
        else {
            res.status(500).send({ error: constants.es.login });
        }
    });
}

