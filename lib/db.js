var config = require('../config'); 

module.exports = knex = require('knex')({
  client: 'mysql',
  connection: {
    user     : config.db.user,
    password : config.db.password, 
    database : config.db.database, 
    port	 : config.db.port 
  }
});