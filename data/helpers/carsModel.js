const db = require('../../data/db-config')

module.exports = {
    find,
    findById,
    insert,
}

function find() {
    return db('cars');
}

function findById(id) {
    return db('cars').where({ id }).first();
}

function insert(car) {
    return db('cars').insert(car, 'id');
}