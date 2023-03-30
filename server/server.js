const express = require('express'); // Express web server framework
const client = require('./db'); // MongoDB driver
const app = express(); // Create a new Express app

app.use(express.json());

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

app.listen(3000, () => { // Start the server
  console.log('API server is running on http://localhost:3000'); // Log the server URL
});

