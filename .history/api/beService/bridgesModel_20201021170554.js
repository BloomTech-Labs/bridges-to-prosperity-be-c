const db = require('../../data/db-config');

module.exports = {
  findBridges,
  findById,
  add,
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

async function add(project_code) {
  await db('bridges').insert(project_code);
  return findById(project_code);
}

function update(changes, project_code) {
  return db('bridges')
    .where({ project_code })
    .update(changes)
    .then(() => {
      return findById(project_code);
    });
}

function getImgs() {
  return db('bridges').select('before_img', 'after_img').whereNotNull();
}
