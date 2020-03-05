exports.up = function(knex) {
  return knex.schema
    .createTable('requests', table => {
        table.increments();
        table.string('location')
            .notNullable()
        table.string('time')
            .notNullable()
        table.integer('requestor_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT')
    })
    .createTable('accepted_requests', table => {
        table.increments();
        table
            .integer('request_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('requests')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT');
        table
            .integer('accepted_by')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT')
        table.unique(['request_id', 'accepted_by']);
    })
    .createTable('user_ratings', table => {
        table.increments();
        table
            .integer('rating_left_by')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT')
        table
            .string('message', 256)
        table
            .integer('rating_for')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT')
        table
            .integer('rating')
        table.unique(['rating_left_by', 'rating_for']);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('requests')
    .dropTableIfExists('accepted_requests')
    .dropTableIfExists('user_ratings')
};
