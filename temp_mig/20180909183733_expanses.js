// @TODO extract these two variables to model
// const EXPANSE = 1
// const INCOME = 2

exports.up = function(knex, Promise) {
  return knex.schema.createTable('expanses', table => {
    table.increments('id').primary()
    table.integer('user_id')
    // @ref https://stackoverflow.com/questions/28350849/knex-migration-creating-foreign-key
    table.foreign('user_id').references('id').inTable('users')
    table.integer('account_book_id')
    table.foreign('account_book_id').references('id').inTable('account_book')
    table.enu('action', [EXPANSE, INCOME])
    table.decimal('amount')
    // @ref on update current timestamp when record is edited
    table.timeStamps(false, true).defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('expanses')
};
