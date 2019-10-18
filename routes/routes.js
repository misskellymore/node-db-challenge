const router = require('express').Router();

const model = require('./model.js');


// projects

router.get('/pro', (req, res) => {
    model.getProjects()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: "error getting projects" })
    })
})

router.post('/pro', (req, res) => {
    const newProject = req.body;
    if (!newProject.name) {
        res.status(400).json({ error: "project name required" })
    } else {
        model.addProject(newProject)
        .then(resp => {
            console.log(resp);
            res.status(201).json(resp)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "error adding project" })
        })
    }
})



// Tasks

router.get('/tasks', (req, res) => {
    model.getTasks()
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: "server error getting tasks" })
    })
})

router.post('/:project_id/tasks', (req, res) => {
    const newTask = req.body;
    const { project_id } = req.params;
    if (!newTask.description) {
        res.status(400).json({ error: "task description required" })
    } else {
        model.addTask(newTask, project_id)
        .then(resp => {
            console.log(resp);
            res.status(201).json(resp)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "server error adding task" })
        })
    }
})


// resources

router.get('/resources', (req, res) => {
    model.getResources()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: "server error getting resources" })
    })
})


router.post('/resources', (req, res) => {
    const newResource = req.body;
    if (!newResource.name) {
        res.status(400).json({ error: "resource name is required" })
    } else {
        model.addResource(newResource)
        .then(resp => {
            console.log(resp);
            res.status(201).json(resp)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "error adding Resource" })
        })
    }
})












module.exports = router;