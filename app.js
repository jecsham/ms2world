const express = require('express');
const handlebars = require('express-handlebars');
const handlebarshelpers = require('handlebars-helpers')();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const steam = require('steam-login');
require('dotenv').config();
const app = express();
const rateLimit = require("express-rate-limit");
const chalk = require('chalk');

app.enable("trust proxy");
const limiter = rateLimit({
	windowMs: 1500,
	max: 30,
	delayMs: 0,
	message: "{}"
});
app.use(limiter);

// routes
const constants = require('./routes/constants.js')

const index = require('./routes/index.js');
const guides = require('./routes/guides.js');
const error = require('./routes/404.js');
const beats = require('./routes/beats.js');
const test = require('./routes/test.js');
const builds = require('./routes/builds.js');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
	limit: '10mb',
	extended: false
}));

app.use(cookieParser());

app.engine('handlebars', handlebars({
	defaultLayout: 'main',
	layoutsDir: `${__dirname}/views/layouts/`,
	helpers: handlebarshelpers
}));

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'handlebars');

app.use(express.static('public'));

// session stuffs

app.use(require('express-session')({ resave: false, saveUninitialized: false, secret: 'a secret' }));
app.use(steam.middleware({
	realm: 'http://localhost:80/',
	verify: 'http://localhost:80/verify',
	apiKey: process.env.STEAM_KEY
}
));
app.get('/login', steam.authenticate(), function (req, res) {
	res.redirect('/');
});
app.get('/verify', steam.verify(), function (req, res) {
	var query = {
		'sid': req.user.steamid
	}
	constants.User_account.findOneAndUpdate(query, { $set: { 'name': req.user.username } }, { upsert: true }, (err, doc) => {
		if (err) return res.redirect('/logout');
		return res.redirect('/');
	});
});
app.get('/logout', steam.enforceLogin('/'), function (req, res) {
	req.logout();
	res.redirect('/');
});

// routes use
app.use('/', index);
app.use('/guides', guides);
app.use('/beats', beats);
app.use('/test', test);
app.use('/builds', builds);

app.use(error);

app.listen(process.env.PORT || 80, () => {
	console.log(chalk.green('Server ready'));
});

