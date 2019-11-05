
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();

      tbl.text('VIN', 100).unique().notNullable();
      tbl.text('make').notNullable();
      tbl.text('model').notNullable();
      tbl.decimal('mileage').notNullable();
      tbl.text('transmission');
      tbl.boolean('automatic');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
