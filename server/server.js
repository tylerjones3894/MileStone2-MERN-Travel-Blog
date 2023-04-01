 // Configuration
const methodOverride = require('method-override');
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const postController = require('./postController');


 // Middleware
app.use(express.json()); // Parse JSON bodies
app.use(methodOverride('method')); // Allow POST, PUT and DELETE from a form


const app = express(); // Create an Express app
const PORT = process.env.PORT || 3000; // Use the port from the environment or 3000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/blog';

mongoose.connect(MONGODB_URI, { // Connect to the database
  useNewUrlParser: true, // These options are to avoid deprecation warnings
  useUnifiedTopology: true, // These options are to avoid deprecation warnings
});

mongoose.connection.on('connected', () => { // Callback function to let us know we're connected
  console.log('Connected to MongoDB'); // Log that we're connected
});

mongoose.connection.on('error', (err) => { // Callback function to let us know if there's an error
  console.error('Error connecting to MongoDB:', err); // Log the error
});

// Middleware for parsing JSON request bodies
app.use(express.json());

// Use the postController for all routes starting with /api/posts
app.use('/api/posts', postController); // Use the postController for all routes starting with /api/posts

app.listen(PORT, () => { // Start the server
  console.log(`Server is running on port ${PORT}`); // Log that the server is running
});




