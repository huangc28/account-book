exports.up = function(knex, Promise) {
  return knex
    .schema
    .hasTable('users')
    .then(exists => (
      !exists && knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('name')
        table.timestamps(false, true)
      })
    ))
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .hasTable('users')
    .then(exists => exists && knex.schema.dropTable('users'))
};
