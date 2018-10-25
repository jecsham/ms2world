const express = require('express');
var session = require('express-session');
const handlebars = require('express-handlebars');
const handlebarshelpers = require('handlebars-helpers')();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

//global static
const gstatic = {};
gstatic.link = {
	css: '/css/bootstrap.css',
	js: '/js/bootstrap.js'
};
gstatic.desc = 'MS2World is the best fansite of Maple Story 2 for find builds, guides, music beats and more!';//temp

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

app.get('/', (req, res) => {
	res.render('index', {
		gstatic: gstatic
	});
});

app.listen(80, () => {
	console.log('app runnig on port 80');
});