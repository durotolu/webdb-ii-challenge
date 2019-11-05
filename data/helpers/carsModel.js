const db = require('../../data/db-config')

module.exports = {
    find,
    findById,
    insert,
    update,
    remove
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

function update(car, id) {
    return db('cars').where({ id }).update(car);
}

function remove(id) {
    return db('cars').where({ id }).del()
}