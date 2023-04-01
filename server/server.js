 // Configuration
 const express = require('express'); // Express web server framework
 const methodOverride = require('method-override');
 const mongoose = require('mongoose')
 require('dotenv').config();
 const PORT = process.env.PORT;
 const app = express(); // Create a new Express app


 // Middleware
 app.use(express.json());
 app.use(methodOverride('method'));

// //Routes
 app.get('/', (req, res) => {
   res.send('Welcome to our travel blog!')
 });

 // Controllers
 const postController = require('./controllers/post_controller'); // Import the post controller
 app.use('/posts', postController); // Use the post controller for all routes starting with /posts


 // Error404
 app.get ('*', (req, res) => {
   res.status(404).send('Error 404: Page not found');
 });

 // Connection
 mongoose.connect(process.env.MONGODB_URI)
   .then(() => {
     app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))
   })
   .catch((err) => console.log(err));



