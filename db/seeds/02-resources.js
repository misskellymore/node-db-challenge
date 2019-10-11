
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'writers'},
        {name: 'tennis_shoes', description: 'size 7.5' },
        {name: 'yoga_teacher', description: 'yin yoga certified' }
      ]);
    });
};
