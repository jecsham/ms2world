module.exports = (app, constants) => {
    app.post('/vote', (req, res) => {
        if (req.user) {
            var postid = constants.sanitize(req.body.postid)
            var votesid = constants.sanitize(req.body.postsid)
            constants.Post_guide.findOneAndUpdate({ _id: postid }, (err) => {
                if (err) return res.status(500).send({ error: constants.es.internal });
                res.send({ error: false });
            });
        }
        else {
            res.status(500).send({ error: constants.es.login });
        }
    });
}