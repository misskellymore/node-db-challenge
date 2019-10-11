const router = require('express').Router();

const model = require('./model.js');


router.get('/', (req, res) => {
    model.getProjects()
    .then(pros => {
        pros.forEach(pro => {
            pro.completed === 0 ? pro.completed = false : pro.completed = true;
        })

        res.status(200).json(pros);
    })
})


router.get('/resources', (req,res) => {
    model.getResources()
    .then(resource => {
            res.status(200).json(resource)
    })
})


router.get('/:id/tasks', (req, res) => {

    const {id} = req.params;
})




module.exports = router;