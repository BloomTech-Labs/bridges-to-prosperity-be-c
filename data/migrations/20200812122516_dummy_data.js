exports.up = (knex) => {
  return knex.schema
    .createTable('bridges', function (table) {
      table.integer('projectcode').notNullable().unique().primary();
      table.float('GPSLat').notNullable();
      table.float('GPSlon').notNullable();
      table.string('country')
      table.string('province');
      table.string('district');
      table.string('type');
      table.string('stage');
      table.string('substage');
      table.string('site');
      table.string('cell');
      table.string('sector');
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('bridges');
};
