const { hashSync } = require('bcrypt');

const salt = 10;
const saltKeys = 'KjSkNiBgT';
const password = '1234';

exports.seed = (knex) => {
  return knex('users')
    .del()
    .then(() => {
      return knex('users').insert([
        {
          name: 'felipe adamoli',
          email: 'adamoli@nave.rs',
          password: hashSync(`${password}${saltKeys}`, salt),
        },
      ]);
    });
};
