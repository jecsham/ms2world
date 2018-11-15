module.exports = (app, constants) => {
    let cstatic = ['<link rel="stylesheet" href="/css/simplemde.css">', '<link rel="stylesheet" href="/css/tagify.css">', '<link rel="stylesheet" href="/css/skillbuilder.css">', '<script src="/js/simplemde.js"></script>', '<script src="/js/jQuery.tagify.js"></script>', '<script src="https://www.google.com/recaptcha/api.js"></script>'];

    app.post('/vote', (req, res) => {
        if (req.user) {
            let usersid = req.user.steamid;
            let postid = constants.sanitize(req.body.postid)
            let type = constants.sanitize(req.body.type);
            let post = constants.sanitize(req.body.post);
            let option = {};
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

    app.post('/delete/post', (req, res) => {
        if (req.user) {
            if (req.user.steamid === req.body.postsid) {
                let postid = constants.sanitize(req.body.postid)
                let postsid = constants.sanitize(req.body.postsid)
                let postType = constants.sanitize(req.body.postType)
                if (postType === 'guide') {
                    constants.Post_guide.deleteOne({ _id: postid, sid: postsid }, (err) => {
                        if (err) return res.status(500).send({ error: constants.es.internal });
                        res.send({ error: false });
                    });
                } else if (postType === 'build') {
                    constants.Post_build.deleteOne({ _id: postid, sid: postsid }, (err) => {
                        if (err) return res.status(500).send({ error: constants.es.internal });
                        res.send({ error: false });
                    });
                }
            } else {
                res.status(500).send({ error: constants.es.steam_id_match });
            }
        } else {
            res.status(500).send({ error: constants.es.login });
        }
    });

    app.post('/report/post', (req, res) => {
        if (req.user) {
            let usersid = req.user.steamid
            let postid = constants.sanitize(req.body.postid)
            let reasonid = constants.sanitize(req.body.reportReason)
            let postType = constants.sanitize(req.body.postType)
            constants.User_account.findOneAndUpdate({ sid: usersid }, { $addToSet: { reports: postid } }, (err) => {
                if (err) return res.status(500).send({ error: constants.es.internal });
            });
            constants.Report_post.insertMany({ post_id: postid, reason_id: reasonid, post_type: postType, reporter_sid: usersid }, { upset: true }, (err) => {
                if (err) return res.status(500).send({ error: constants.es.internal });
                res.send({ error: false });
            });
        } else {
            res.status(500).send({ error: constants.es.login });
        }
    });


    app.get('/edit-guide/:id', async (req, res) => {
        let messages = await constants.messages()
        if (req.user) {
            let guideid = constants.sanitize(req.params.id)
            constants.Post_guide.findOne({ _id: guideid }, 'title description content sid tags', (err, doc) => {
                if (err) return res.render('404');
                if (req.user.steamid === doc.sid) {
                    res.render('edit-guide', {
                        messages: messages,
                        gstatic: constants.gstatic,
                        title: 'Edit - ' + constants.title,
                        user: req.user,
                        post: doc,
                        cstatic: cstatic
                    });
                } else {
                    return res.render('404');
                }
            })
        } else {
            res.redirect('/');
        }
    });

    app.post('/edit/guide', (req, res) => {
        if (req.user) {
            constants.verifyRecaptcha(req.body["recaptcha"], function (success) {
                if (success) {
                    if (req.body.description.length >= 5 && req.body.content.length >= 100 && req.body.tags.length >= 1) {
                        if (req.body.description.length <= 300 && req.body.content.length <= 800000 && req.body.tags.length <= 1000) {
                            let data = {};
                            data.postid = constants.sanitize(req.body.postid);
                            data.description = constants.sanitize(req.body.description);
                            data.content = constants.sanitize(req.body.content);
                            data.tags = constants.sanitize(req.body.tags);
                            data.date_last_edit = new Date();
                            data.author = req.user.username;
                            constants.Post_guide.findOneAndUpdate({ _id: data.postid, sid: req.user.steamid }, data, (err, doc) => {
                                if (err) return res.status(500).send({ error: constants.es.internal });
                                return res.send({ error: false, id: doc._id });
                            });
                        } else {
                            return res.status(500).send({ error: constants.es.big_content });
                        }
                    } else {
                        return res.status(500).send({ error: constants.es.short_content });
                    }
                } else {
                    return res.status(500).send({ error: constants.es.recaptcha });
                }
            })
        } else {
            return res.status(500).send({ error: constants.es.login });
        }
    });

    app.get('/edit-build/:id', async (req, res) => {
        let messages = await constants.messages()
        if (req.user) {
            let buildid = constants.sanitize(req.params.id)
            constants.Post_build.findOne({ _id: buildid }, 'title description class_name type data_object sid', (err, doc) => {
                if (err) return res.render('404');
                if (req.user.steamid === doc.sid) {
                    constants.Build_template.findOne({ class_name: doc.class_name }, { _id: 0, class_name: 0 }, (err, data) => {
                        if (err) return res.render('404')
                        res.render('edit-build', {
                            messages: messages,
                            gstatic: constants.gstatic,
                            title: 'Edit - ' + constants.title,
                            user: req.user,
                            class: data.data_object,
                            post: doc,
                            whichPartial: () => "sb/" + doc.class_name,
                            cstatic: cstatic
                        });
                    });
                } else {
                    return res.render('404');
                }
            })
        } else {
            res.redirect('/');
        }
    });

    app.post('/edit/build', (req, res) => {
        if (req.user) {
            constants.verifyRecaptcha(req.body["recaptcha"], function (success) {
                if (success) {
                    if (req.body.description.length >= 5) {
                        if (req.body.description.length <= 300) {
                            let data = {};
                            data.postid = constants.sanitize(req.body.postid);
                            data.description = constants.sanitize(req.body.description);
                            data.type = constants.sanitize(req.body.type);
                            data.data_object = constants.sanitize(req.body.data_object);
                            data.date_last_edit = new Date();
                            data.author = req.user.username;
                            constants.Post_build.findOneAndUpdate({ _id: data.postid, sid: req.user.steamid }, data, (err, doc) => {
                                if (err) return res.status(500).send({ error: constants.es.internal });
                                return res.send({ error: false, id: doc._id });
                            });
                        } else {
                            return res.status(500).send({ error: constants.es.big_content });
                        }
                    } else {
                        return res.status(500).send({ error: constants.es.short_content });
                    }
                } else {
                    return res.status(500).send({ error: constants.es.recaptcha });
                }
            })
        } else {
            return res.status(500).send({ error: constants.es.login });
        }
    });
}