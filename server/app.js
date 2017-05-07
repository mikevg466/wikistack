const express = require('express');
const app = express();
const routes = require('./routes');
const morgan = require('morgan');
const db = require('../models');

// log requests and set up routes
app.use(morgan('dev'));
app.use('/', routes);


// set up database connection and listen to requests
db.sycn().then(() => app.listen(9001, () => console.log('Listening to ports over 9000!!!')));


// capture all errors
app.use('/', (err, req, res, next) => {
  console.error(err.message);
  console.error(err.stack);
  res.status(err.status).send(err.message);
});
