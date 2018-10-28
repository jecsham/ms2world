const constants = require("./constants.js");

constants.router.get('/create-guide', (req, res) => {
    if(req.user){
        res.render('create-guide', {
            gstatic: constants.gstatic,
            title: 'Create - MS2World.com',
            user: req.user
        });
    }else{
        res.redirect('/');
    }
});

module.exports = constants.router;