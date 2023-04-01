// const Post = require('../models/Post');

// module.exports = {
//     index,
//     show,
//     new: newPost,
//     create,
//     delete: deletePost,
//     edit,
//     update
// };

// function index(req, res) {
//     Post.find({}, function(err, posts) {
//         res.render('posts/index', { title: 'All Posts', posts });
//     });
// }

// function show(req, res) {
//     Post.findById(req.params.id, function(err, post) {
//         res.render('posts/show', { title: 'Post Detail', post });
//     });
// }

const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  try {
    const post = new Post(req.body);
    const savedPost = await post.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the post.' });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the posts.' });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      res.status(404).json({ error: 'Post not found.' });
      return;
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the post.' });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPost) {
      res.status(404).json({ error: 'Post not found.' });
      return;
    }
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the post.' });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      res.status(404).json({ error: 'Post not found.' });
      return;
    }
    res.status(200).json({ message: 'Post deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the post.' });
  }
};

