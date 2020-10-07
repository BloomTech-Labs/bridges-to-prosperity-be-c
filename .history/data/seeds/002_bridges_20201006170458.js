exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('bridges')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('bridges').insert([
        {
          // id: 1,
          projectcode: 45,
          GPSLat: 23.32,
          GPSLon: 42.43,
          country: 'Rwanda',
          province: 'Western',
          district: 'Eastern',
          type: 'Suspension',
          stage: 'Rejected',
          substage: 'Technical',
          site: 'Bridge',
          cell: 'Multicellular',
          sector: 'Fumbwe',
          
        },
        {
          // id: 2
          projectcode: 42,
          GPSLat: 89.44,
          GPSLon: 39.43,
          country: 'Rwanda',
          province: 'Eastern',
          district: 'Western',
          type: 'Suspended',
          stage: 'Approved',
          substage: 'Technical',
          site: 'Bridge',
          cell: 'Multicellular',
          sector: 'Fumbwe',
        },
        {
          // id: 3,
          projectcode: 38,
          GPSLat: 89,
          GPSLon: 42.43,
          country: 'Rwanda',
          province: 'Southern',
          district: 'Eastern',
          type: 'Suspension',
          stage: 'Approved',
          substage: 'Technical',
          site: 'Rebero',
          cell: 'Multicellular',
          sector: 'Giheke',
        },
      ]);
    });
};
