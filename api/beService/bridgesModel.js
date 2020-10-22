const db = require('../../data/db-config');

module.exports = {
  findBridges,
  findById,
  add,
  update,
  getImgs,
};

function findBridges() {
  return db('bridges').orderBy('project_code');
}

function findById(project_code) {
  return db('bridges').where({ project_code });
}

async function add(bridge) {
  await db('bridges').insert(bridge);
  return findById(bridge.project_code);
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
  return db('bridges')
    .select('before_img', 'after_img')
    .whereNotNull('before_img', 'after_img');
}
