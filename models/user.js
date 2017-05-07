const db = require('./db.js');

const User = db.define('user', {
  name: {},
  email: {}
});

module.exports = User;
