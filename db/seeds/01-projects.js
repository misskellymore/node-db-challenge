
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'coffeefable', description: 'an app where short story writers can share their work while earning', completed: false},
        {name: 'yoga nonprofit', description: 'donation based yoga where money goes towards SF homeless', completed: false}
       
      ]);
    });
};
