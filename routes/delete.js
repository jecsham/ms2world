module.exports = (app, constants) => {
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
}