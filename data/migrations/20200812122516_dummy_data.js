exports.up = (knex) => {
  return knex.schema.createTable('bridges', function (table) {
    table.increments();
    table.integer('projectcode').notNullable().unique();
    table.float('GPSLat').notNullable();
    table.float('GPSLon').notNullable();
    table.string('country');
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
