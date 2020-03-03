
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Tim Burton', username: 'timburton', password: 'password123', isProvider: false },
        {id: 2, name: 'test name', username: 'test', password: 'test123', isProvider: false },
        {id: 3, name: 'Johnny Depp', username: 'johnnydepp', password: 'pirate', isProvider: false },
      ]);
    });
};
