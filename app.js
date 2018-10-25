const express = require('express');
const session = require('express-session');
const handlebars = require('express-handlebars');
const handlebarshelpers = require('handlebars-helpers')();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const rateLimit = require("express-rate-limit");

app.enable("trust proxy");
const limiter = rateLimit({
	windowMs: 1500,
	max: 30,
	delayMs: 0,
	message: "{}"
});
app.use(limiter);

// routes
const index = require('./routes/index.js');
const guides = require('./routes/guides.js');

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

app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: false
}));

app.use('/', index);
app.use('/guides', guides);

app.listen(80, () => {
	console.log('app runnig on port 80');
});

