module.exports = async (app, constants) => {
    let messages = await constants.messages()
    let TwitchApi = require('twitch-api-v5');
    TwitchApi.clientID = process.env.TWITCH_KEY;

    app.get('/lives', (req, res) => {
        TwitchApi.streams.live({ game: 'MapleStory 2', limit: 12 }, (err, result) => {
            if (err) return res.render('404')
            res.render('lives', {
                messages: messages,
                gstatic: constants.gstatic,
                user: req.user,
                lives: result.streams,
                title: "Lives - " + constants.title
            })
        })
    })
}