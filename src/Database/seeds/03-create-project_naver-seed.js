exports.seed = (knex) => {
  return knex('project_naver')
    .del()
    .then(() => {
      return knex('project_naver').insert([
        {
          project_id: 1,
          naver_id: 1,
        },
        {
          project_id: 1,
          naver_id: 2,
        },
        {
          project_id: 3,
          naver_id: 3,
        },
      ]);
    });
};
