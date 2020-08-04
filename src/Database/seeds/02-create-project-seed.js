exports.seed = (knex) => {
  return knex('projects')
    .del()
    .then(() => {
      return knex('projects').insert([
        {
          name: 'myMediaList',
          user_id: 1,
        },
        {
          name: 'projetinho dos guri',
          user_id: 1,
        },
        {
          name: 'nave-challenge',
          user_id: 1,
        },
      ]);
    });
};
