module.exports = (app, constants) => {

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

    app.post('/delete/post', (req, res) => {
        if (req.user) {
            if (req.user.steamid === req.body.postsid) {
                var postid = constants.sanitize(req.body.postid)
                var postsid = constants.sanitize(req.body.postsid)
                var postType = constants.sanitize(req.body.postType)
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
            if (req.user.steamid === req.body.postsid) {
                var postid = constants.sanitize(req.body.postid)
                var postsid = constants.sanitize(req.body.postsid)
                var postType = constants.sanitize(req.body.postType)
                if (postType === 'guide') {
                    constants.Post_guide.insertMany({ _id: postid, sid: postsid }, (err) => {
                        if (err) return res.status(500).send({ error: constants.es.internal });
                        res.send({ error: false });
                    });
                } else if (postType === 'build') {
                    constants.Post_build.insertMany({ _id: postid, sid: postsid }, (err) => {
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
}