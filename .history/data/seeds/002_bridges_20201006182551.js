exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('bridges')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('bridges').insert([
        {
          stage: 'Approved',
          substage: 'Technical',
          site: 'Rebero',
          cell: 'Multicellular',
          sector: 'Giheke',
        },
      ]);
    });
};
