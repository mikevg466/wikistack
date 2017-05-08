const routes = require('express').Router();
const Page = require('../../models/page.js');
module.exports = routes;

routes.get('/add', (req, res) => res.render('addpage'));
routes.get('/:url', (req, res, next) => {
  Page.findOne({
    where: {urlTitle: req.params.url}
  })
    .then((page) => {
      console.log(page);
      console.log(page.title);
      console.log(page.content);
      res.render('wikipage', {page: page})
    })
    .catch(next);
});
routes.post('/', (req, res, next) => {
  const title = req.body.title;
  Page.create({
    title: req.body.title,
    content: req.body.content
  })
  .then(() => res.redirect('/wiki'))
  .catch(next);
});
routes.get('/', (req, res) => res.render('index'));
