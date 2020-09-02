const axios = require('axios');
const dsConfig = require('../../config/dsConfig');
const dsClient = axios.create(dsConfig);
const db = require('../../data/db-config');

const getPrediction = (x1, x2, x3) => {
  return dsClient.post('/predict', { x1, x2, x3 });
};

const getViz = (state) => {
  return dsClient.get(`/viz/${state}`);
};

module.exports = { getPrediction, getViz, add };

function add(data) {
  return db('bridges').insert(
    { project_code: data.project_code },
    { bridge_name: data.bridge_name },
    { bridge_type: data.bridge_type },
    { latitude: data.latitude },
    { longitude: data.longitude },
    { district_id: data.district_id },
    { district_name: data.district_name },
    { province_id: data.province_id },
    { province_name: data.province_name },
    { project_stage: data.project_stage },
    { individuals_served: data.individuals_served },
    { bridge_image: data.bridge_image }
  );
}
