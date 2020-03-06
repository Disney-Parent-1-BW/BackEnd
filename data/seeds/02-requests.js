
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('requests').del()
    .then(function () {
      // Inserts seed entries
      return knex('requests').insert([
        {id: 1, location: 'USA', time:'2000-12-31 20:30:00', requestor_id: 1 },
        {id: 2, location: 'USA', time:'2000-01-15 18:30:00', requestor_id: 2 },
        {id: 3, location: 'USA', time:'2000-01-11 12:00:00', requestor_id: 3 },
      ]);
    });
};
