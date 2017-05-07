const Sequelize = require('sequelize');
const db = new Sequelize('postgresql://localhost:5432/wikistack');

module.exports = db;
