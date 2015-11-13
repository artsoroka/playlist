var config = require('../config'); 

module.exports = knex = require('knex')({
  client: 'mysql',
  connection: config.db
});