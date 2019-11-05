
exports.up = function(knex) {
  return knex.schema.createTable('sales', tbl => {
      tbl.increments();

      tbl.integer('car_id').unsigned()
      tbl.foreign('car_id').references('id').inTable('cars').onUpdate("NO ACTION")//.withKeyName('car_id')
      tbl.decimal('costPrice')
      tbl.decimal('salesPrice').notNullable();
      tbl.text('buyer').notNullable();
  })
};

exports.down = function(knex) {
  
};
