const routes = require('express').Router();
const Promise = require('bluebird');
const Page = require('../../models/page.js');
const User = require('../../models/user.js');
module.exports = routes;

routes.get('/add', (req, res) => res.render('addpage'));
routes.get('/:url', (req, res, next) => {
  Page.findOne({
    where: {urlTitle: req.params.url}
  })
    .then((page) => {
      res.render('wikipage', {page: page})
    })
    .catch(next);
});
routes.post('/', (req, res, next) => {
  const userPromise = User.findOrCreate({
    where:{
      name: req.body.name,
      email: req.body.email
    }
  });
  const pagePromise = Page.create({
    title: req.body.title,
    content: req.body.content
  });
  Promise.all([userPromise, pagePromise])
    .then(([user, page]) => {
      page.setAuthor(user[0]);
      res.redirect('/wiki/' + page.urlTitle);
    })
    .catch(next);

});
routes.get('/', (req, res) => res.render('index'));
