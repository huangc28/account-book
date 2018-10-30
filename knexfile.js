require('dotenv').config()

const {
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
} = process.env

const dbConf = {
  client: 'mysql',
  connection: {
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASSWORD,
  },
  pool: {
    max: 1,
    min: 1,
  },
  migrations: {
    tableName: 'knex_migrations',
  },
  seeds: {
    directory: './seeds/dev',
  },
}

// Update with your config settings.
// const DEVELOPMENT_CONFIG = {
//   client: 'mysql',
//   connection: {
//     host: '127.0.0.1',
//     port: '3306',
//     database: 'accounting_book',
//     user: 'root',
//     password: 'Huang_0216',
//   },
//   pool: {
//     max: 1,
//     min: 1,
//   },
//   migrations: {
//     tableName: 'knex_migrations',
//   },
//   seeds: {
//     directory: './seeds/dev',
//   },
// }

// const TEST_CONFIG = {
//   client: 'mysql',
//   connection: {
//     host: '127.0.0.1',
//     port: '3306',
//     database: 'accounting_book',
//     user: 'root',
//     password: 'Huang_0216',
//   },
//   pool: {
//     max: 1,
//     min: 1,
//   },
//   migrations: {
//     tableName: 'knex_migrations',
//   },
//   seeds: {
//     directory: './seeds/dev',
//   },
// }

// module.exports = {
//   development: DEVELOPMENT_CONFIG,
//   test: TEST_CONFIG,
// };

module.exports = dbConf
