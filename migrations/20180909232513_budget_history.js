
exports.up = function (knex, Promise) {
  return knex
    .schema
    .hasTable('budget_history')
    .then(exists => (
      !exists &&
        knex.schema.createTable('budget_history', table => {
          table.increments('id').primary()
          table.integer('account_book_id').unsigned().references('id').inTable('account_book')
          table.decimal('budget_amount')
          table.boolean('isActive').defaultTo(false)
          table.dateTime('budget_from').defaultTo(knex.fn.now())
          table.dateTime('budget_end').defaultTo(knex.fn.now())
          table.timestamps(false, true)
        })
    ))
};

exports.down = function (knex, Promise) {
  return knex
    .schema
    .hasTable('budget_history')
    .then(exists => exists && knex.schema.dropTable('budget_history'))
};
