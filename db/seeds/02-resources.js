
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'writers'},        
        {name: 'yoga_teacher one', description: 'hot yoga certified'},
        {name: 'yoga_teacher two', description: 'yin yoga certified' },
        {name: 'yoga_teacher three', description: 'power yoga certified' }
      ]);
    });
};
