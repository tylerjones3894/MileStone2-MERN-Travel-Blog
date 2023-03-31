// schema for blog posts

// Dependencies
const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    author: {
        type: String
    },
    image: {
        type: String
    },
    content: {
        type: String
    }
})

// model and export
const Post = mongoose.model('Posts', postSchema)

module.exports = Post