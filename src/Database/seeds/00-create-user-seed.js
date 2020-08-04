exports.seed = (knex) => {
  return knex('users')
    .del()
    .then(() => {
      return knex('users').insert([
        {
          id: 1,
          name: 'felipe adamoli',
          email: 'adamoli@gmail.com',
          password: 1234,
        },
      ]);
    });
};
