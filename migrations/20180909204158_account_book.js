exports.up = function(knex, Promise) {
  return knex
    .schema
    .hasTable('account_book')
    .then(exists => (
      !exists && knex.schema.createTable('account_book', table => {
        table.increments('id').primary()
        // @ref assigning foreign key: https://github.com/tgriesser/knex/issues/245
        table.integer('user_id', 11).unsigned().references('id').inTable('users')
        table.integer('budget_amount')
        table.timestamps(false, true)
      })
    ))
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .hasTable('account_book')
    .then(exists => exists && knex.schema.dropTable('account_book'))
};
