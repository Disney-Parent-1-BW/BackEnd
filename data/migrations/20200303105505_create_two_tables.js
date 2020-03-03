exports.up = function(knex) {
  return knex.schema
    .createTable('users_kids', table =>
    {
        table.increments();
        table.string('name')
            .notNullable();
        table.string('special_instructions');
        table.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })

    .createTable('messages', table =>
    {
        table.increments();
        table.integer('accepted_request_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('accepted_requests')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.string('message')
            .notNullable();
        table.integer('sent_by')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropIfTableExsists('messages')
    .dropIfTableExsists('users_kids');
};
