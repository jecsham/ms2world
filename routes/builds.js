
module.exports = (app, constants) => {

    cstatic = ['<link rel="stylesheet" href="/css/skillbuilder.css">'];

    
    app.get(['/builds','/builds/:filter'], (req, res) => {

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

        constants.Post_build.paginate({}, { select: 'title sid date_create', page: page, limit: 10, sort: filter }, (err, data) => {
            if (err) return res.render('error')
            res.render('builds', {
                gstatic: constants.gstatic,
                title: 'builds - MS2World.com',
                user: req.user,
                reqFilter: reqFilter,
                page: data.page,
                totalPages: data.totalPages,
                nextPage: data.nextPage,
                prevPage: data.hasPrevPage,
                builds: data.docs
            });
        });
    });

    app.get('/build/:id', (req, res) => {
        var buildid = constants.sanitize(req.params.id);
        constants.Post_build.findOne({ '_id': buildid }, (err, data) => {
            if (err) return res.render('404');
            constants.steamapi.getUserSummary(data.sid).then(summary => {
                data.author = summary.nickname;
                constants.Build_template.findOne({ class_name: data.class_name }, { _id: 0, class_name: 0 }, (err, doc) => {
                    if (!doc) return res.render('404')
                    res.render('build', {
                        gstatic: constants.gstatic,
                        title: 'MS2World.net: ' + data.title,
                        build: data,
                        user: req.user,
                        class: doc.data_object,
                        cstatic: cstatic,
                        whichPartial: () => "sb/" + data.class_name
                    })
                });
            })
                .catch(err => {
                    res.status(500).render('error');
                })
        });
    });
}
