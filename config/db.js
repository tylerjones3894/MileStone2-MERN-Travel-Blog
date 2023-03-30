const { MongoClient } = require('mongodb'); // MongoDB driver
require('dotenv').config(); // Load environment variables

const uri = process.env.MONGODB_URI; // MongoDB connection string
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true }); // Create a new MongoClient

module.exports = client;
