const { EXPANSE, INCOME } = require('../constants/cashFlowTypes')


exports.up = function(knex, Promise) {
  return knex
    .schema
    .hasTable('expanses')
    .then(exists => (
      !exists && knex.schema.createTable('expanses', table => {
        table.increments('id').primary()
        // @ref https://github.com/tgriesser/knex/issues/245#issuecomment-234702769
        table.integer('user_id', 11).unsigned().references('id').inTable('users')
        table.integer('account_book_id', 11).unsigned()
        table.foreign('id').references('account_book.id')
        table.enu('action', [EXPANSE, INCOME])
        table.decimal('amount')
        // @ref on update current timestamp when record is edited
        table.timestamps(false, true)
      })
    ))
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .hasTable('expanses')
    .then(exists => exists && knex.schema.dropTable('expanses'))
};
