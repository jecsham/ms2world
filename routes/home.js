module.exports = (app, constants) => {
    app.get(['/', '/index', '/home'], async (req, res) => {
        let messages = await constants.messages()
        constants.Ms2_new.find({}, null, { sort: { date_create: -1 } }, (err, news) => {
            let newsMap = {};
            news.forEach((element) => {
                newsMap[element._id] = element;
            });
            constants.Post_guide.paginate({}, { select: 'title author sid date_create voteCount viewCount', page: 1, limit: 9, sort: { '_id': -1 } }, (err, recentGuides) => {
                if (err) return res.render('error')
                constants.Post_guide.paginate({}, { select: 'title author sid date_create voteCount viewCount', page: 1, limit: 9, sort: { 'voteCount': -1 } }, (err, popularGuides) => {
                    if (err) return res.render('error')
                    constants.Post_build.paginate({}, { select: 'title author sid date_create voteCount viewCount', page: 1, limit: 9, sort: { 'voteCount': -1 } }, (err, popularBuilds) => {
                        if (err) return res.render('error')
                        constants.Post_build.paginate({}, { select: 'title author sid date_create voteCount viewCount', page: 1, limit: 9, sort: { '_id': -1 } }, (err, recentBuilds) => {
                            if (err) return res.render('error')
                            res.render('index', {
                                messages: messages,
                                gstatic: constants.gstatic,
                                title: 'Home - ' + constants.title,
                                user: req.user,
                                news: newsMap,
                                recentGuides: recentGuides.docs,
                                popularGuides: popularGuides.docs,
                                popularBuilds: popularBuilds.docs,
                                recentBuilds: recentBuilds.docs,
                            });
                        });
                    });
                });
            });
        });
    });
}
