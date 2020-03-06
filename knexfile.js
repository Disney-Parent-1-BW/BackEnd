// Update with your config settings.
require('dotenv').config()
module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    
    // connection: {
    //   host: '127.0.0.1',
    //   port: '5555',
    //   user: 'postgres',
    //   password:process.env.PASS,
    //   database: 'Disney'
    // },
    connection: { filename: './data/disneyparents.sqlite3' },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
  }

};
