const routes = require('express').Router();

routes.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = routes;
