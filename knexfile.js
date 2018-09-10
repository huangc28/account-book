// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      port: '3306',
      database: 'accounting_book',
      user: 'root',
      password: 'Huang_0216'
    },
    pool: {
      max: 1,
      min: 1
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
};
