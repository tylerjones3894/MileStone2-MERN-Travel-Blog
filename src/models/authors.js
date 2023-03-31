// schema for authors

// Dependencies
const mongoose = require('mongoose');
const { Schema } = mongoose;

const authorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    Bio: {
        type: String
    }
})

// model and export
const Author = mongoose.model('Author', authorSchema);

module.exports = Author;