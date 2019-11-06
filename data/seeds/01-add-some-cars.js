
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: '9876', make: 'Toyota', model: 'camry', mileage:0, automatic: 1, status: 'clean'},
        {VIN: '543', make: 'Honda', model: 'Civic', mileage:11.6, automatic: 0},
        {VIN: '8874', make: 'ford', model: 'mustang', mileage:203.347}
      ]);
    });
};
