module.exports = (app, constants) => {
    app.get('/profile/:sid', (req, res) => {
        var sid = constants.sanitize(req.params.sid)
        constants.User_account.findOne({ sid: sid }, (err, account) => {
            if (err) return res.render('error')
            constants.Post_guide.paginate({ sid: sid }, { select: 'title author date_create voteCount viewCount', page: 1, limit: 10, sort: { voteCount: -1 } }, (err, guides) => {
                if (err) return res.render('error')
                constants.Post_build.paginate({ sid: sid }, { select: 'title author date_create voteCount viewCount', page: 1, limit: 10, sort: { voteCount: -1 } }, (err, builds) => {
                    if (err) return res.render('error')
                    res.render('profile', {
                        gstatic: constants.gstatic,
                        title: account.name+'\'s Profile - '+constants.title,
                        user: req.user,
                        account: account,
                        guidesTotal: guides.totalDocs,
                        buildsTotal: builds.totalDocs,
                        guides: guides.docs,
                        builds: builds.docs
                    });
                });
            })
        });
    });
}