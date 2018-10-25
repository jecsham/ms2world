const express = require('express');
var session = require('express-session');
const handlebars = require('express-handlebars');
const handlebarshelpers = require('handlebars-helpers')();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
	limit: '50mb',
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

app.get('/', function (req, res) {
    res.send('Hello World!');
  });
  
  app.listen(80, function () {
    console.log('app listening on port 80');
  });