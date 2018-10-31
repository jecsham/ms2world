module.exports = (app, constants) => {
    app.get('/guides', (req, res) => {
        constants.Post_guide.find({},null,{limit:10}, (err, data) => {
            if(err) return res.render('error')

            res.render('guides', {
                gstatic: constants.gstatic,
                title: 'Guides - MS2World.com',
                user: req.user,
                guides: data
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
        constants.Post_guide.find({ '_id': guideid }, (err, data) => {
            if (err) return res.render('404');
            constants.steamapi.getUserSummary(data[0].sid).then(summary => {
                data[0].author = summary.nickname;
                res.render('guide', {
                    gstatic: constants.gstatic,
                    title: 'MS2World.net: ' + data[0].title,
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