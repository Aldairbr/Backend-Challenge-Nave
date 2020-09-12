const { DATABASE, PASSWORD } = require('./src/Config/envConfig');

module.exports = {
  development: {
    client: 'postgres',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: PASSWORD,
      database: DATABASE,
    },
    migrations: {
      directory: './src/Database/migrations',
    },
    seeds: {
      directory: './src/Database/seeds',
    },
    useNullAsDefault: true,
  },
};
