const routes = require('express').Router();
const wiki = require('./wiki.js');

routes.use('/wiki', wiki);

routes.get('/', (req, res, next) => {
  const err = new Error();
  err.status = 404;
  err.message = "Page not found";
  next(err);
});

module.exports = routes;
