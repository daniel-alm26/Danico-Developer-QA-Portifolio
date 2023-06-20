const Project = require('../models/Project')

module.exports = class ProjectController {
    static async register(req, res) {
        res.json('Olá Danico Developer')
    }
}