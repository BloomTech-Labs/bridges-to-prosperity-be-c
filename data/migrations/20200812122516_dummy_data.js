exports.up = (knex) => {
  return knex.schema.createTable('bridges', function (table) {
    table.increments();
    table.integer('project_code').notNullable().unique();
    table.string('bridge_name');
    table.string('bridge_type');
    table.float('latitude').notNullable();
    table.float('longitude').notNullable();
    table.string('district_id');
    table.string('district_name');
    table.string('province_id');
    table.string('province_name');
    table.string('project_stage');
    table.string('individuals_served');
    table.string('bridge_image');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('bridges');
};
