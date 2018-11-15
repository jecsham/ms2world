module.exports = (app, constants) => {
    app.get(['/guides', '/guides/:filter'], async (req, res) => {
        let messages = await constants.messages()

        let query = {};
        let filter;
        let reqFilter;
        let page;

        if (req.query.search != undefined) {
            query = {
                $text: {
                    $search: constants.sanitize(req.query.search)
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

        constants.Post_guide.paginate(query, { select: 'title author date_create sid voteCount viewCount', page: page, limit: 10, sort: filter }, (err, data) => {
            if (err) return res.render('error')
            res.render('guides', {
                messages: messages,
                gstatic: constants.gstatic,
                title: 'Guides - ' + constants.title,
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

    app.get('/guide/:id', async (req, res) => {
        let messages = await constants.messages()
        let guideid = constants.sanitize(req.params.id);

        constants.Post_guide.findOne({ '_id': guideid }, (err, data) => {
            if (!data) return res.render('404');
            data.postType = 'guide'
            constants.incView(guideid, data.postType)
            if (req.user) {
                constants.User_account.findOne({ sid: req.user.steamid, reports: guideid }, '_id', (err, isreported) => {
                    if (err) return res.render('error')
                    let report = {}
                    report.isreported = false;
                    if (isreported) report.isreported = true;
                    constants.User_account.findOne({ sid: req.user.steamid, votes: guideid }, '_id', (err, hasvote) => {
                        if (err) return res.render('error')
                        let vote = false;
                        if (hasvote) vote = true;
                        constants.Report_reason.find({}, (err, reasons) => {
                            if (err) return res.render('404');
                            report.reasons = reasons;
                            res.render('guide', {
                                messages: messages,
                                gstatic: constants.gstatic,
                                title: data.title + ' - ' + constants.title,
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
                    messages: messages,
                    gstatic: constants.gstatic,
                    title: data.title + ' - ' + constants.title,
                    post: data,
                    user: req.user
                });
            }
        })
    });
}