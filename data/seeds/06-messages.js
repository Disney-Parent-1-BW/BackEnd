
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {id: 1, accepted_request_id: 1, message:'I accept the request!', sent_by: 2},
        {id: 2, accepted_request_id: 2, message:'you got it!', sent_by: 3 },
      ]);
    });
};
