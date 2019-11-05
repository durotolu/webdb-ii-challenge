
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();

      tbl.text('VIN', 100).unique().notNullable();
      tbl.text('make').notNullable();
      tbl.text('model').notNullable();
      tbl.decimal('mileage').notNullable();
      tbl.text('automatic');
      tbl.boolean('status');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
