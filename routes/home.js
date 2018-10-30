module.exports = (app, constants) => {
    app.get(['/', '/index', '/home'], (req, res) => {
        constants.Ms2_new.find({}, null, { sort: { date_create: -1 } }, (err, news) => {
            var newsMap = {};
            news.forEach((element) => {
                newsMap[element._id] = element;
            });
            res.render('index', {
                gstatic: constants.gstatic,
                title: 'Home - MS2World.com',
                user: req.user,
                news: newsMap
            });
        });
    });
}