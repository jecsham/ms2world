const constants = require("./constants.js");
var cstatic =  ['<link rel="stylesheet" href="/css/simplemde.css">', '<script src="/js/simplemde.js"></script>'];

constants.router.get('/create-guide', (req, res) => {
    if(req.user){
        res.render('create-guide', {
            gstatic: constants.gstatic,
            title: 'Create - MS2World.com',
            user: req.user,
            cstatic: cstatic
        });
    }else{
        res.redirect('/');
    }
});
constants.router.post('/create-guide/submit', (req, res) => {
    if(req.user && req.body.title.length <= 150 && req.body.description.length <= 300){
        var data = {};

        data.title = escape(req.body.title.length);
        data.description = escape(req.body.description);
        data.content = escape(req.body.content);
        data.sid = req.user.steamid;
        data.date_create = new Date();

        constants.Post_guide.create(data, (err) => {
            if (err) return res.status(500);
          });
          res.contentType('json');
          res.send({ some: JSON.stringify({response:'json'}) });
    }else{
        res.status(500);
        res.end('none');
    }
});

module.exports = constants.router;