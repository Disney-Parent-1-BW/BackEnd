
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('accepted_requests').del()
    .then(function () {
      // Inserts seed entries
      return knex('accepted_requests').insert([
        {id: 1, request_id: 1, accepted_by: 2 },
        {id: 2, request_id: 2, accepted_by: 3 },
      ]);
    });
};
