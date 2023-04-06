// Configuration
const express = require('express');
const Post = require('./models/posts'); // Import the Post model
const mongoose = require('mongoose');
const methodOverride = require('method-override');
require('dotenv').config();


const app = express(); // Create an Express app
const PORT = process.env.PORT || 8080; // Use the port from the environment or 3000
const MONGODB = process.env.MONGODB_URI || 'mongodb+srv://marbakerswe:REpoIYRDjBeW0O3c@cluster0.7fb42vp.mongodb.net/Travel_Blog?retryWrites=true&w=majority';

// Middleware
app.set('views', __dirname + '/views');
app.use(express.json()); // Parse JSON bodies
app.use(methodOverride('_method')); // Allow POST, PUT and DELETE from a form

mongoose.connect(MONGODB, { // Connect to the database
  useNewUrlParser: true, // These options are to avoid deprecation warnings
  useUnifiedTopology: true, // These options are to avoid deprecation warnings
});

mongoose.connection.on('connected', () => { // When connected
  console.log('Mongoose is connected'); // Log that Mongoose is connected
});

app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find(); // Find all blog posts in the database
    res.status(200).json(posts); // Return the found blog posts as JSON
  } catch (err) {
    res.status(500).json({ message: 'Error fetching posts' }); // In case of error, return a 500 status code and a message
  }
});

app.get ('/tyler', (req, res) => {
  res.send('Hello Tyler');
});

app.post('/edit', async (req, res) => {
  const { title, blogDescription, details, date, imageUrl } = req.body;

  if (!title || !blogDescription || !details || !date || !imageUrl) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newPost = new Post({
      title,
      blogDescription,
      details,
      date,
      imageUrl,
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ message: 'Error creating post' });
  }
});


// Use the postController for all routes starting with /api/posts
const postController = require('./controllers/post_controller');
app.use('/api', postController); // Use the postController for all routes starting with /api/posts

app.listen(PORT, () => { // Start the server
  console.log(`Server is running on port ${PORT}`); // Log that the server is running
});
