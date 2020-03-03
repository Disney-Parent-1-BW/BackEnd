
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users_kids').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_kids').insert([
        {id: 1, name: 'Rupert', special_instructions: 'allergic to milk!', user_id: 1 },
        {id: 2, name: 'Molly', special_instructions: 'she is afraid of rollercoasters!', user_id: 2 },
        {id: 3, name: 'Tommy', special_instructions: 'watch out, he bites!', user_id: 3 },
      ]);
    });
};
