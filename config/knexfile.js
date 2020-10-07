/* eslint-disable prettier/prettier */
var dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

module.exports = {
  development: {
    client: 'pg',
    connection: "postgresql://postgres@localhost/Bridges",
    migrations: {
      directory: '../data/migrations',
      tableName: 'knex_migrations',
    },
    seeds: { directory: '../data/seeds' },
  },

  test: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: { directory: '../data/migrations' },
    seeds: { directory: '../data/seeds' },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: { directory: '../data/migrations' },
    seeds: { directory: '../data/seeds' },
  },
};
