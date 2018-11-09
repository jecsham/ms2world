
module.exports = (app, constants) => {

    cstatic = ['<link rel="stylesheet" href="/css/skillbuilder.css">'];


    app.get(['/builds', '/builds/:filter'], (req, res) => {

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

        constants.Post_build.paginate(query, { select: 'title author date_create', page: page, limit: 10, sort: filter }, (err, data) => {
            if (err) return res.render('error')
            constants.Ms2_class.find({}, 'name', (err, classes) => {
                if (err) return res.render('error')
                res.render('builds', {
                    gstatic: constants.gstatic,
                    title: 'MS2World.net · Builds',
                    user: req.user,
                    reqFilter: reqFilter,
                    page: data.page,
                    totalPages: data.totalPages,
                    nextPage: data.nextPage,
                    prevPage: data.hasPrevPage,
                    builds: data.docs,
                    classes: classes
                });
            })
        });
    });

    app.get('/build/:id', (req, res) => {
        var buildid = constants.sanitize(req.params.id);
        constants.Post_build.findOne({ '_id': buildid }, (err, data) => {
            if (!data) return res.render('404');
            
            data.postType = 'build'
            constants.Build_template.findOne({ class_name: data.class_name }, { _id: 0, class_name: 0 }, (err, doc) => {
                if (err) return res.render('404')
                if (req.user) {
                    constants.Report_reason.find({}, (err, reasons) => {
                        if (err) return res.render('404');
                        constants.User_account.findOne({ sid: req.user.steamid, votes: buildid }, '_id', (err, hasvote) => {
                            if (err) return res.render('error')
                            var vote = false;
                            if (hasvote) vote = true;
                            constants.User_account.findOne({ sid: req.user.steamid, reports: buildid }, '_id', (err, isreported) => {
                                if (err) return res.render('error')
                                var report = {}
                                report.isreported = false;
                                if (isreported) report.isreported = true;
                                report.reasons = reasons;
                                res.render('build', {
                                    gstatic: constants.gstatic,
                                    title: 'MS2World.net · ' + data.title,
                                    post: data,
                                    report: report,
                                    vote: vote,
                                    user: req.user,
                                    class: doc.data_object,
                                    cstatic: cstatic,
                                    whichPartial: () => "sb/" + data.class_name
                                })
                            })
                        })
                    })
                } else {
                    res.render('build', {
                        gstatic: constants.gstatic,
                        title: 'MS2World.net · ' + data.title,
                        post: data,
                        user: req.user,
                        class: doc.data_object,
                        cstatic: cstatic,
                        whichPartial: () => "sb/" + data.class_name
                    })
                }
            });
        });
    });
}
