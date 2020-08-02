exports.up = (knex) =>
  knex.schema.createTable('navers', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.date('birthdate').notNullable();
    table.date('admission_date').notNullable();
    table.string('job_role').notNullable();

    table.integer('user_id').notNullable();

    table.foreign('user_id').references('id').inTable('users');
  });

exports.down = (knex) => knex.schema.dropTable('navers');
