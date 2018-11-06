module.exports = (app, constants) => {
    app.get(['/guides', '/guides/:filter'], (req, res) => {

        var filter;
        var reqFilter;
        var page;

        if (req.query.page === undefined)
            page = 1
        else
            page = constants.sanitize(req.query.page)

        if (req.params.filter === undefined)
            reqFilter = 'recent'
        else
            reqFilter = constants.sanitize(req.params.filter)

        if (reqFilter === 'recent')
            filter = { '_id': -1 }
        else if (reqFilter === 'popular')
            filter = { 'votes': -1 }
        else
            filter = { '_id': -1 }

        constants.Post_guide.paginate({}, { select: 'title author date_create', page: page, limit: 10, sort: filter }, (err, data) => {
            if (err) return res.render('error')
            res.render('guides', {
                gstatic: constants.gstatic,
                title: 'Guides - MS2World.com',
                user: req.user,
                reqFilter: reqFilter,
                page: data.page,
                totalPages: data.totalPages,
                nextPage: data.nextPage,
                prevPage: data.hasPrevPage,
                guides: data.docs
            });
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