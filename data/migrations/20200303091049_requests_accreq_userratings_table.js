exports.up = function(knex) {
  return knex.schema
    .createTable('requests', table => {
        table.increments();
        table.string('location')
            .notNullable()
        table.datetime('time')
            .notNullable()
        table.string('requestor_id')
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
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users');
};
