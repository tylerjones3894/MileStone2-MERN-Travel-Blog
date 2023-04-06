const express = require('express');
const Post = require('../models/posts.js');
const router = express.Router();

// Add a new blog post
router.post('/new', async (req, res) => {
  const { title, blogDescription, details, date, imageUrl } = req.body; // Destructuring the request body

  if (!title || !blogDescription || !details || !date || !imageUrl) { // Check if all fields are filled
    return res.status(400).json({ message: 'All fields are required' }); // If not, return a 400 status code and a message
  }

  try { // If all fields are filled, create a new post
    const newPost = new Post({
      title,
      blogDescription,
      details,
      date,
      imageUrl,
    });

    await newPost.save(); // Save the new post to the database
    res.status(201).json(newPost); // Return a 201 status code and the new post
  } catch (err) { // If there's an error, return a 500 status code and a message
    res.status(500).json({ message: 'Error creating post' }); // Log the error
  }
});

// Get all blog posts
router.get('/', async (req, res) => {
  console.log('GET /posts route triggered'); // Add this line
  
  try { // Try to get all posts
    const posts = await Post.find(); // Find all posts
    console.log('Fetched posts:', posts); // Add this line
    res.status(200).json(posts); // Return a 200 status code and the posts
  } catch (err) { // If there's an error, return a 500 status code and a message
    console.error('Error in GET /posts:', err); // Add this line
    res.status(500).json({ message: 'Error fetching posts' }); // Log the error
  }
});

// Get single post
router.get('/:id', (req, res) => {
  Post.findById(req.params.id)
  .populate('post')
  .then(foundPost => {
    res.render('Show', {
      post: foundPost
    })
  })
  .catch(err => {
    res.render('error404')
  })
})

// Edit Post
router.get('/:id/edit', async (req, res) => {
  try {
    const foundPost = await Post.findById(req.params.find)

    res.render('Edit', {
      post: foundPost
    })
  } catch(err){
    res.render('error404')
  }
});

module.exports = router; // Export the router
