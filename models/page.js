const db = require('./db.js');

const Page = db.define('page', {
  title: {},
  urlTitle: {},
  content: {},
  status: {}
});

module.exports = Page;
