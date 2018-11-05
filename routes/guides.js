module.exports = (app, constants) => {
    app.get('/guides', (req, res) => {
        constants.Post_guide.paginate({}, {select: 'title author', page: 1, limit: 10, sort: { _id: -1 },}, (err, data) => {
            // result.docs
            // result.total
            // result.limit - 10
            // result.page - 3
            // result.pages
            if(err) return res.render('error')
            res.render('guides', {
                gstatic: constants.gstatic,
                title: 'Guides - MS2World.com',
                user: req.user,
                guides: data.docs
            });
        });
    });

    app.post('/guides/get', (req, res) => {
        var page = constants.sanitize(req.body.page);
        constants.Post_guide.paginate({}, {select: 'title author', page: 1, limit: 10, sort: { _id: -1 },}, (err, data) => {
            // result.docs
            // result.total
            // result.limit - 10
            // result.page - 3
            // result.pages
            if(err) return res.render('error')
            res.render('guides', {
                gstatic: constants.gstatic,
                title: 'Guides - MS2World.com',
                user: req.user,
                guides: data.docs
            });
        });
    });

    

    app.get('/guides/popular', (req, res) => {
        res.render('guides-popular', {
            gstatic: constants.gstatic,
            title: 'Popular Guides - MS2World.com',
            user: req.user
        });
    });

    app.get('/guides/recent', (req, res) => {
        res.render('guides-recent', {
            gstatic: constants.gstatic,
            title: 'Recent Guides - MS2World.com',
            user: req.user
        });
    });

    app.get('/guide/:id', (req, res) => {
        var guideid = constants.sanitize(req.params.id);
        constants.Post_guide.findOne({ '_id': guideid }, (err, data) => {
            if (err) return res.render('404');
            constants.steamapi.getUserSummary(data.sid).then(summary => {
                data.author = summary.nickname;
                res.render('guide', {
                    gstatic: constants.gstatic,
                    title: 'MS2World.net: ' + data.title,
                    guide: data,
                    user: req.user
                });
            })
            .catch(err => {
                res.status(500)
                res.render('error');
            })
        });
    });
}