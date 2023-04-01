const express = require('express');
const Post = require('./models/Post');
const router = express.Router();

// Add a new blog post
router.post('/add', async (req, res) => {
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
  try { // Try to get all posts
    const posts = await Post.find({}); // Find all posts
    res.status(200).json(posts); // Return a 200 status code and the posts
  } catch (err) { // If there's an error, return a 500 status code and a message
    res.status(500).json({ message: 'Error fetching posts' }); // Log the error
  }
});

module.exports = router; // Export the router
