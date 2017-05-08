const routes = require('express').Router();
const Page = require('../../models/page.js');
module.exports = routes;

routes.get('/add', (req, res) => res.render('addpage'));
routes.post('/', (req, res) => {
  const title = req.body.title;
  Page.create({
    title: req.body.title,
    content: req.body.content
  })
  .then(() => res.redirect('/'))
  .catch((err) => {
    console.error(err);
    err.status = 500;
    next(err);
  });
});
routes.get('/', (req, res) => res.render('index'));
