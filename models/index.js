const db = require('./db.js');
const User = require('./user.js');
const Page = require('./page.js');

// Page.belongsTo(User, {as: 'author'});

module.exports = db;
