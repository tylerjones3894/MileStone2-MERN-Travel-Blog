// Dependencies
const express = require('express'); // Express web server framework
const client = require('./db'); // MongoDB driver
const methodOverride = require('method-override');
const mongoose = require('mongoose')

// Configuration
require('dotenv').config();
const PORT = process.env.PORT;
const app = express(); // Create a new Express app

// Middleware
app.use(express.json());
app.use(methodOverride('method'));

//Routes
app.get('/', (req, res) => {
  res.send('Welcome to our travel blog!')
});

// Posts
app.post('/api/posts', async (req, res) => { // Create a new post
  try { // Try to create a new post
    const post = req.body;
    post.createdAt = new Date();

    await client.connect(); // Connect to the MongoDB database
    const database = client.db('your_database_name'); // Select the database
    const postsCollection = database.collection('posts'); // Select the collection

    const result = await postsCollection.insertOne(post); // Insert the post into the collection
    res.status(201).json({ _id: result.insertedId, ...post }); // Return the new post
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the post.' }); // Return an error
  } finally {
    await client.close();
  }
});

// Posts

// Authors

// Error404

// Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))
  })
  .catch((err) => console.log(err));

// app.listen(3000, () => { // Start the server
//   console.log('API server is running on http://localhost:3000'); // Log the server URL
// });

