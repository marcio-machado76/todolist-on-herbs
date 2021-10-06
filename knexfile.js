module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'todolist_on_herbs_db',
      user: 'postgres',
      password: 'postgres',
      host: 'todolist.clumyskftn3d.us-east-1.rds.amazonaws.com',
      port: 5432
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/infra/db/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './src/infra/db/seeds/dev'
    }
  },

  staging: {},

  production: {}

}
