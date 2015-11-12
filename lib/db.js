module.exports = knex = require('knex')({
  client: 'mysql',
  connection: {
    user     : 'root',
    password : '',
    database : 'playlist',
    port	 : 3306
  }
});