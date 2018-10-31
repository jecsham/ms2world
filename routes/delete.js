module.exports = (app, constants) => {
    app.post('/delete/guide', (req, res) => {
        if (req.user) {
            if (req.user.steamid === req.body.postsid) {
                var postid = constants.sanitize(req.body.postid)
                var postsid = constants.sanitize(req.body.postsid)
                constants.Post_guide.deleteOne({ _id: postid, sid: postsid }, (err) => {
                    if (err) return res.status(500).send({ error: constants.es.internal });
                    res.send({ error: false });
                });
            } else {
                res.status(500).send({ error: constants.es.steam_id_match });
            }
        } else {
            res.status(500).send({ error: constants.es.login });
        }
    });
}