// schema for blog posts

// Dependencies
const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    blogDescription: {
        type: String,
        required: true
    },
    details: {
        type: String
    },
    date: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
})

// model and export
const Post = mongoose.model('Post', postSchema)

module.exports = Post