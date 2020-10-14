exports.up = (knex) => {
  return knex.schema.createTable('bridges', function (table) {
    // table.increments();
    table.integer('project_code').notNullable().unique();
    table.string('after_img');
    table.string('before_img');
    table.string('province');
    table.string('district');
    table.string('sector');
    table.string('cell');
    table.string('bridge_site_name');
    table.string('project_stage');
    table.string('bridge_type');
    table.
    table.float('latitude');
    table.float('longitude');
    table.string('individuals_directly_served');
    table.string('assessment_date');
    table.string('original_community_col');
    table.string('community_served');
    table.integer('prov_id');
    table.integer('district_id');
    table.integer('sector_id');
    table.integer('cell_id');

  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('bridges');
};