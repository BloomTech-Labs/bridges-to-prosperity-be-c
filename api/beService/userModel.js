const db = require('../../data/db-config');

module.exports = {
  find,
  findById,
};

function find() {
  return db('users').select('id', 'username').orderBy('id');
}

function findById(id) {
  return db('users').where({ id }).first();
}
