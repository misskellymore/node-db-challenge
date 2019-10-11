
exports.up = function(knex) {

    return knex.schema.createTable('projects', tbl => {

        tbl.increments();
        tbl.string('name').notNullable();
        tbl.text('description');
        tbl.boolean('completed').defaultTo(false).notNullable();

    })

    .createTable('resources', tbl => {

        tbl.increments();
        tbl.string('name').unique().notNullable();
        tbl.text('description');

    })

    .createTable('tasks', tbl => {

        tbl.increments();        
        tbl.text('description').notNullable();
        tbl.text('notes');
        tbl.boolean('completed').defaultTo('false').notNullable();


        // foreign key to projects

        tbl.integer('project_id')
        // forces integer to be positive
        .unsigned()
        .notNullable()
        .references('id')
        // this table must exist already
        .inTable('projects')

        

    })

    .createTable('project_resources', tbl => {

        // foreign key to projects
        
        tbl.integer('project_id')
        // forces integer to be positive
        .unsigned()
        .notNullable()
        .references('id')
        // this table must exist already
        .inTable('recipes')



        // foreign key to resources

        tbl.integer('resource_id')
        // forces integer to be positive
        .unsigned()
        .notNullable()
        .references('id')
        // this table must exist already
        .inTable('resources')
    })

    
  
};




exports.down = function(knex) {

    return knex.schema.dropTableIfExists('project_resources')
                      .dropTableIfExists('tasks')
                      .dropTableIfExists('resources')
                      .dropTableIfExists('projects')
  
};
