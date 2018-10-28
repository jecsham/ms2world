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
    if(req.user){
        var data = {};
        data.title = req.body.title;
        data.description = req.body.description;
        data.content = req.body.content;
        data.sid = req.user.steamid;
    
        console.log(data);
        res.redirect(url.format({
            pathname: '/guide/:id'
        }));
    }else{
        res.status(500);
        res.end('none');
    }
});

module.exports = constants.router;