// schema for blog posts

// Dependencies
const mongoose = require('mongoose');
const { Schema } = mongoose;
const SamplePost = require('../models/samplePost.js');


const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    blogDescription: {
        type: String
    },
    details: {
        type: String
    },
    date: {
        type: String
    },
    imageUrl: {
        type: String
    }
})

// model and export
const Post = mongoose.model('Post', postSchema)

module.exports = Post;
