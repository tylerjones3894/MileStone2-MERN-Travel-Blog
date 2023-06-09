// Schema for blog posts
const mongoose = require('mongoose');
const { Schema } = mongoose;


const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String
    },
    date: {
        type: String
    },
    destination: {
        type: String
    },
    postContent: {
        type: String
    },
    imageUrl: {
        type: String
    }
});

// model and export
const Post = mongoose.model('post', postSchema)

module.exports = Post;
