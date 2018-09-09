const EXPANSE = 1
const INCOME = 2

exports.up = function(knex, Promise) {
  return Promise.all([
    // migrate "accouting_book" table
    knex.schema.createTable('account_book', table => {
      table.increments('id').primary()
      // @ref assigning foreign key: https://github.com/tgriesser/knex/issues/245
      table.integer('user_id', 11).unsigned().references('id').inTable('users')
      table.integer('budget_amount')
      table.timestamps(false, true)
    }),

    // migrate "users" table
    knex.schema.createTable('users', table => {
      table.increments('id').primary()
      table.string('name')
      table.timestamps(false, true)
    }),

    // migrate "expanses" table
    knex.schema.createTable('expanses', table => {
      table.increments('id').primary()
      // @ref https://stackoverflow.com/questions/28350849/knex-migration-creating-foreign-key
      table.integer('user_id', 11).unsigned().references('id').inTable('users')
      table.integer('account_book_id', 11).unsigned().references('id').inTable('account_book')
      table.enu('action', [EXPANSE, INCOME])
      table.decimal('amount')
      // @ref on update current timestamp when record is edited
      table.timestamps(false, true)
    }),
  ])
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('account_book')
};
