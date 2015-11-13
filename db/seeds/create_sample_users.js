
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(), 

    knex('users').insert({name: 'admin', email: 'admin@playlistapp.com', password: 'admin'}),
    knex('users').insert({name: 'user1', email: 'user1@gmail.com', password: 'user'}), 
    knex('users').insert({name: 'user2', email: 'user2@gmail.com', password: 'user'})
  );
};
