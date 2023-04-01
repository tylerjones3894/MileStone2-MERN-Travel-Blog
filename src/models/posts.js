// schema for blog posts

// Dependencies
const mongoose = require('mongoose');
const { StringDecoder } = require('string_decoder');
const { Schema } = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        require: true
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

module.exports = Post