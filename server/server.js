 // Configuration
 const express = require('express'); // Express web server framework
 const methodOverride = require('method-override');
 const mongoose = require('mongoose')
 const PORT = process.env.PORT;
 const app = express(); // Create a new Express app
 require('dotenv').config();
 
 const authorRouter = require('./controllers/authorcontroller');

 app.use('/authors', authorRouter)


 // Middleware
 app.use(express.json());
 app.use(methodOverride('method'));

// //Routes
 app.get('/', (req, res) => {
   res.send('Welcome to our travel blog!')
 });

 // Controllers
 const postController = require('./controllers/postcontroller'); // Import the post controller
 app.use('/posts', postController); // Use the post controller for all routes starting with /posts

 const authorController = require('./controllers/authorcontroller'); // Import the author controller
 app.use('/authors', authorController); // Import the author controller


 // Error404
 app.get ('*', (req, res) => {
   res.status(404).send('Error 404: Page not found');
 });

 // Connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((err) => {
    console.log(err)
  })

  // Listener
  app.listen(PORT, () => {
    console.log('Listening on port', PORT);
  });