const db = require('../db/dbConfig.js');


// resources

function addResource(resource) {
    return db('resources')
    .insert(resource)
    .then(ids => {
        return ids
    });
}


function getResources() {
    return db('resources')
}


// projects

function addProject(project) {
    return db('projects')
    .insert(project)
    .then(ids => {
        return ids
    });
}



function getProjects() {
    return db('projects')

    .then(data => {
        const BoolArrayPro = data.map(project => {
            if(project.completed){
                const updatedBool = {
                    ...project,
                    completed: true
                };
                return updatedBool;

            } else {
                const updatedBool = {
                    ...project,
                    completed: false
                };
                return updatedBool;
            }
        });
        return BoolArrayPro;
    })
}


// tasks

function addTask(task, project_id) {

    const newtask = { ...task, project_id : project_id}


    return db('tasks')
    .insert(newtask)
    .then(id => {
        return id
    });
}



function getTasks() {
    return db('tasks as t')
    .join('projects as p', 'p.project_id', 't.project_id')
    .select('t.task_id', 't.description', 't.notes', 't.completed as t_completed',
            'p.name','p.description')

    .then(data => {
        const BoolArrayTask = data.map(task => {
            if(task.task_completed){
                const updatedBool = {
                    ...task,
                    task_completed: true
                };
                return updatedBool;
            } else {
                const updatedBool = {
                    ...task,
                    task_completed: false
                };
                return updatedBool;
            }
        });
        return BoolArrayTask;
    })
}


module.exports = {
    addResource,
    addProject,
    addTask,
    getResources,
    getProjects,
    getTasks
}