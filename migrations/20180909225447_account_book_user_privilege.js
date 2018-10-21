// @TODO move privilege values to model enums
// if an account book owner invites a person and
// that person agrees on the request. That person
// automatically becomes and editor.
const OWNER = 1
const EDITOR = 2

exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('account_book_user_privilege', table => {
      table.increments('id').primary()
      table.integer('user_id').unsigned()
      table.foreign('user_id').references('id').inTable('users')
      table.integer('account_book_id').unsigned()
      table.foreign('account_book_id').references('id').inTable('account_book')
      table.enu('privilege', [OWNER, EDITOR])
      table.timestamps(false, true)
    })
  ])
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('account_book_user_privilege')
  ])
};
