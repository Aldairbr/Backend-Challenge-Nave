exports.seed = (knex) => {
  return knex('users')
    .del()
    .then(() => {
      return knex('users').insert([
        {
          name: 'felipe adamoli',
          email: 'adamoli@nave.rs',
          password: 1234,
        },
      ]);
    });
};
