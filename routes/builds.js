
module.exports = (app, constants) => {

    let cstatic = ['<link rel="stylesheet" href="/css/skillbuilder.css">'];


    app.get(['/builds', '/builds/:filter'], async (req, res) => {

        let messages = await constants.messages()

        let query = {};
        let filter;
        let reqFilter;
        let page;
        let classFilter = 'all'
        let typeFilter = 'all'


        if (req.query.search != undefined) {
            query.$text = {
                $search: constants.sanitize(req.query.search)
            }
        }
        if (req.query.page === undefined)
            page = 1
        else
            page = constants.sanitize(req.query.page)

        if (req.query.class === undefined)
            classFilter = 'all'
        else if (req.query.class != 'all') {
            classFilter = constants.sanitize(req.query.class)
            classFilter = classFilter.replace(' ', '_')
            query.class_name = classFilter.toLowerCase()
        }

        if (req.query.type === undefined)
            typeFilter = 'all'
        else if (req.query.type != 'all') {
            typeFilter = constants.sanitize(req.query.type)
            query.type = typeFilter
        }

        if (req.params.filter === undefined)
            reqFilter = 'popular'
        else
            reqFilter = constants.sanitize(req.params.filter)

        if (reqFilter === 'recent')
            filter = { 'date_create': -1 }
        else if (reqFilter === 'popular')
            filter = { 'voteCount': -1 }
        else
            filter = { 'date_create': -1 }

        constants.Post_build.paginate(query, { select: 'title author sid date_create voteCount viewCount', page: page, limit: 10, sort: filter }, (err, data) => {
            if (err) return res.render('error')
            constants.Ms2_class.find({}, 'name', { sort: { 'name': 1 } }, (err, classes) => {
                if (err) return res.render('error')
                constants.Ms2_classType.find({}, 'name', (err, types) => {
                    if (err) return res.render('error')
                    res.render('builds', {
                        messages: messages,
                        gstatic: constants.gstatic,
                        title: 'Builds - ' + constants.title,
                        user: req.user,
                        reqFilter: reqFilter,
                        page: data.page,
                        totalPages: data.totalPages,
                        nextPage: data.nextPage,
                        prevPage: data.hasPrevPage,
                        builds: data.docs,
                        classes: classes,
                        classTypes: types,
                        classFilter: classFilter,
                        typeFilter: typeFilter

                    });
                });
            })
        });
    });

    app.get('/build/:id', async (req, res) => {
        let messages = await constants.messages()
        let buildid = constants.sanitize(req.params.id);
        constants.Post_build.findOne({ '_id': buildid }, (err, data) => {
            if (!data) return res.render('404');

            data.postType = 'build'
            constants.incView(buildid, data.postType)
            constants.Build_template.findOne({ class_name: data.class_name }, { _id: 0, class_name: 0 }, (err, doc) => {
                if (err) return res.render('404')
                if (req.user) {
                    constants.Report_reason.find({}, (err, reasons) => {
                        if (err) return res.render('404');
                        constants.User_account.findOne({ sid: req.user.steamid, votes: buildid }, '_id', (err, hasvote) => {
                            if (err) return res.render('error')
                            let vote = false;
                            if (hasvote) vote = true;
                            constants.User_account.findOne({ sid: req.user.steamid, reports: buildid }, '_id', (err, isreported) => {
                                if (err) return res.render('error')
                                let report = {}
                                report.isreported = false;
                                if (isreported) report.isreported = true;
                                report.reasons = reasons;
                                res.render('build', {
                                    messages: messages,
                                    gstatic: constants.gstatic,
                                    title: data.title + ' - ' + constants.title,
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
                        messages: messages,
                        gstatic: constants.gstatic,
                        title: data.title + ' - ' + constants.title,
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
