exports.up = (knex) => {
  return knex.schema.createTable('bridges', function (table) {
    table.increments();
    table.integer('project_code').notNullable().unique();
    table.string('bridge_name');
    table.string('bridge_type');
    table.float('latitude').notNullable();
    table.float('longitude').notNullable();
    table.integer('district_id');
    table.string('district_name');
    table.integer('province_id');
    table.string('province_name');
    table.string('project_stage');
    table.integer('individuals_served');
    table.string('bridge_image');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('bridges');
};
