const express = require('express');
const router = express.Router();

const Post = require('../models/posts');

// GET all posts
router.get('/', (req, res) => {
    Post.find({})
    .then(posts => res.json(posts))
    .catch(err => console.log(err));
} );

// GET one post
router.get('/:id', (req, res) => {
    Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => console.log(err));
} );
