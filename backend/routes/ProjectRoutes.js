const router = require('express').Router()

const ProjectController = require('../controllers/ProjectController')

router.post('/register', ProjectController.register)

module.exports = router