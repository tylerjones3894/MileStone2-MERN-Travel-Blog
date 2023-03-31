const Post = require('../models/Post');

module.exports = {
    index,
    show,
    new: newPost,
    create,
    delete: deletePost,
    edit,
    update
};

function index(req, res) {
    Post.find({}, function(err, posts) {
        res.render('posts/index', { title: 'All Posts', posts });
    });
}

function show(req, res) {
    Post.findById(req.params.id, function(err, post) {
        res.render('posts/show', { title: 'Post Detail', post });
    });
}


