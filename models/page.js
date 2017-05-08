const db = require('./db.js');
const Sequelize = require('sequelize');

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  urlTitle: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('open', 'close')
  }
},{
  hooks: {
    beforeValidate: function(page){
      page.urlTitle = page.getUrlTitle;
    }
  },
  getterMethods: {
    getUrlTitle: function() {
      return 'wiki/' + this.title.replace(/\s+/g, '_').replace(/\W/g, '')
    }
  }
});

module.exports = Page;
