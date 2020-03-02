exports.up = function(knex) {
  return knex.schema
    .createTable('users', table =>
    {
        table.increments();
        table.string('name')
            .notNullable()
            .unique();
        table.string('username')
            .notNullable()
            .unique();
        table.string('password')
            .notNullable();
        table.boolean('isProvider')
            .notNullable()
            .defaultTo(false);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users');
};
