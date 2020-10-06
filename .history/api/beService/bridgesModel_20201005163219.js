const db = require('../../data/db-config');

module.exports = {
  findBridges,
  findById,
};

function findBridges() {
  return (
    db('bridges')
      // .select('id', 'name', 'status', 'project-code', 'longitude', 'latitude')
      .orderBy('id')
  );
}

function findById(id) {
  return db('bridges').where(id);
}

function update(changes, id) {
  return db('bridges').where({ id }).update(changes)
      .then(() => {
          return findById(id);
      })
}