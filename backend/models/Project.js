const mongoose = require('../db/conn')
const { Schema } = mongoose

// Criando o Schema no DB com Mongoose
const Project = mongoose.model(
    'Project',
    new Schema(
        {
            name: {
                type: String,
                required: true,
            },
            date: {
                type: Date,
                required: true,
            },
            images: {
                type: Array,
            },
            description: {
                type: String,
                required: true,
            },
            projectLink: {
                type: String,
                required: true,
            },
        },
        { timestamps: true },
    ),
)

module.exports = Project