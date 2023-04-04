// Schema for blog posts
const mongoose = require('mongoose');
const { Schema } = mongoose;


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
