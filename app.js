const express = require('express');
const handlebars = require('express-handlebars');
const handlebarshelpers = require('handlebars-helpers')();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();
const app = express();
const rateLimit = require("express-rate-limit");
const chalk = require('chalk');
var favicon = require('serve-favicon');

app.enable("trust proxy");

const limiter = rateLimit({
	windowMs: 1500,
	max: 30,
	delayMs: 0,
	message: "{}"
});

app.use(limiter);

app.use(favicon(path.join(__dirname, 'public/assets', 'favicon.ico')));

require('./cronjobs/cron.js');

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

// routes
const constants = require("./constants/constants.js");
require('./routes')(app, constants);

app.listen(process.env.PORT || 80, () => {
	console.log(chalk.green('Server loaded'));
});

