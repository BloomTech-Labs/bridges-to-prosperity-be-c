const db = require('../../data/db-config');

module.exports = {
  findBridges,
  findById,
  update,
};

function findBridges() {
  return (
    db('bridges')
      // .select('id', 'name', 'status', 'project-code', 'longitude', 'latitude')
      .orderBy('project_code')
  );
}

function findById(project_code) {
  return db('bridges').where(project_code);
}


function update(changes, project_code) {
  return db('bridges')
    .where({ project_code })
    .update(changes)
    .then(() => {
      return findById(project_code);

    });
}
