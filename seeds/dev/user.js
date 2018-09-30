
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Bryan Huang'},
        {id: 2, name: 'Ivy Yang'},
        {id: 3, name: 'Jacky Chen'}
      ]);
    });
};
