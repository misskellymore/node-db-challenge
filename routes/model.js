const db = require('../db/dbConfig.js');




// get resources

function getResources(){

    return db('resources') 

    .select()
    .then(data => {
        return data;
    });
}



// get resouce w/project id

function getProjectResource(project_id) {

    return ('resources')
    .select('resources.name', 'resources.description')
    .join('project_resources as pr', "pr.resource_id", "=", 'resources.id' )
    .where(({project_id}))
    .then(data => {
        return data;
    })
}

// get projects

function getProjects() {

    return db('projects')
    .select('name', 'project_description', 'completed')
    .then(data => {
        return data;
    })
}


// get tasks for project id

function getProjectTasks(project_id) {

    return db('projects')

    .select('projects.name', 'projects.project_description', 
            'tasks.task_description', 'tasks.notes', 'tasks.completed')

    .join('tasks', 'projects.id', "=", 'tasks.project_id')
    .where({project_id})
    .then(data => {
        return data;
    })        

}



// add project

function addProject(project){

    return db('projects')
    .insert(project)
    .then(data => {
        return data;
    })
}


// add resource

function addResource(resource){

    return db('resources')
    .insert(resource)
    .then(data => {
        return data;
    })
}


// add task

function addTask(project_id, task){

    return db('tasks')
    .insert(task)
    .where({project_id})
    .then(data => {
        return data;
    })
}


module.exports = {  getResources, 
                    getProjectResource,
                    getProjects,
                    getProjectTasks,
                    addProject,
                    addResource,
                    addTask

 }