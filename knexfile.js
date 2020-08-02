module.exports = {
  development: {
    client: 'postgres',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: 123,
      database: 'navedex',
    },
    migrations: {
      directory: './src/Database/migrations',
    },
    useNullAsDefault: true,
  },
};
