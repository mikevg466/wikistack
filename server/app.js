const express = require('express');
const app = express();
const routes = require('./routes');
const morgan = require('morgan');
const db = require('../models');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const path = require('path');

// set up render engine
nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

// set static folders
app.use(express.static(path.join(__dirname, '../public')));

// log requests, set up body parser, and set up routes
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', routes);


// set up database connection and listen to requests
db.sync({force: true}).then(() => app.listen(9001, () => console.log('Listening to ports over 9000!!!')));


// capture all errors
app.use('/', (err, req, res, next) => {
  console.error(err.message);
  console.error(err.stack);
  res.render('error', {message: err.message, error: err});
});
