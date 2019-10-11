
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'contact writers', notes:'none', completed: false, project_id: 1},
        {description: 'run', notes:'run 2 miles everday for 5 days', completed: false, project_id: 2},
        {description: 'hire teacher', completed: false, project_id: 3}
        
      ]);
    });
};
