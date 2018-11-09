module.exports = (app, constants) => {
    app.get(['/guides', '/guides/:filter'], (req, res) => {

        var query = {};
        var filter;
        var reqFilter;
        var page;

        if (req.query.search != undefined) {
            query = {
                $text: {
                    $search: req.query.search
                }
            }
        }
        if (req.query.page === undefined)
            page = 1
        else
            page = constants.sanitize(req.query.page)

        if (req.params.filter === undefined)
            reqFilter = 'popular'
        else
            reqFilter = constants.sanitize(req.params.filter)

        if (reqFilter === 'recent')
            filter = { '_id': -1 }
        else if (reqFilter === 'popular')
            filter = { 'voteCount': -1 }
        else
            filter = { '_id': -1 }

        constants.Post_guide.paginate(query, { select: 'title author date_create voteCount', page: page, limit: 10, sort: filter, search: 'temple' }, (err, data) => {
            if (err) return res.render('error')
            res.render('guides', {
                gstatic: constants.gstatic,
                title: 'MS2World.net · Guides',
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
            if (!data) return res.render('404');
            data.postType = 'guide'
            if (req.user) {
                constants.User_account.findOne({ sid: req.user.steamid, reports: guideid }, '_id', (err, isreported) => {
                    if (err) return res.render('error')
                    var report = {}
                    report.isreported = false;
                    if (isreported) report.isreported = true;
                    constants.User_account.findOne({ sid: req.user.steamid, votes: guideid }, '_id', (err, hasvote) => {
                        if (err) return res.render('error')
                        var vote = false;
                        if (hasvote) vote = true;
                        constants.Report_reason.find({}, (err, reasons) => {
                            if (err) return res.render('404');
                            report.reasons = reasons;
                            res.render('guide', {
                                gstatic: constants.gstatic,
                                title: 'MS2World.net · ' + data.title,
                                post: data,
                                report: report,
                                vote: vote,
                                user: req.user
                            });
                        });
                    });
                })
            } else {
                res.render('guide', {
                    gstatic: constants.gstatic,
                    title: 'MS2World.net · ' + data.title,
                    post: data,
                    user: req.user
                });
            }
        })
    });
}