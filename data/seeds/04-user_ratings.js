
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_ratings').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_ratings').insert([
        {id: 1, rating_left_by: 1, message: 'they did a great job!', rating_for: 2, rating: 5},
        {id: 2, rating_left_by: 2, message: 'my child was returned unharmed!', rating_for: 1, rating: 5},
        {id: 3, rating_left_by: 3, message: 'they lost my kid!', rating_for: 2, rating: 1},
      ]);
    });
};
