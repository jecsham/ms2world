const express = require('express');
const handlebars = require('express-handlebars');
const helpers = require('handlebars-helpers')();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();
const app = express();
const rateLimit = require("express-rate-limit");
const favicon = require('serve-favicon');


app.enable("trust proxy");

const limiter = rateLimit({
	windowMs: 900,
	max: 60,
	delayMs: 0,
	message: "{}"
});

 app.use(limiter);

app.use(favicon(path.join(__dirname, 'public/assets', 'favicon.ico')));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
	limit: '10mb',
	extended: false
}));

app.use(cookieParser());

app.engine('handlebars', handlebars({
	defaultLayout: 'main',
	layoutsDir: `${__dirname}/views/layouts/`,
	helpers: helpers
}));

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

// server stuff
const constants = require("./constants/constants.js");

// routes
require('./routes')(app, constants);

require('./cronjobs/cron.js');

app.listen(process.env.PORT || 3000, () => {
	constants.logEvent.emit('server-started')
});

