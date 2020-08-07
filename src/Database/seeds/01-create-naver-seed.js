exports.seed = (knex) => {
  return knex('navers')
    .del()
    .then(() => {
      return knex('navers').insert([
        {
          name: 'wesley marques',
          birthdate: '1994-09-12',
          admissionDate: '2020-08-15',
          jobRole: 'web developer',
          user_id: 1,
        },
        {
          name: 'guilherme rodrigues',
          birthdate: '2000-04-14',
          admissionDate: '2020-03-11',
          jobRole: 'backend developer',
          user_id: 1,
        },
        {
          name: 'dionatan voss',
          birthdate: '2000-06-17',
          admissionDate: '2020-03-03',
          jobRole: 'web developer',
          user_id: 1,
        },
      ]);
    });
};
