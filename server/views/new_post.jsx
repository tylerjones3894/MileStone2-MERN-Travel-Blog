// edit existing postimport React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

//after importing React and basic design from Material UI, we then set our properties 
const NewPost = (props) => {
  const [title, setTitle] = useState('props.title'); // prop needed to create a title
  const [author, setAuthor] = useState('props.author'); // prop needed to add in the details 
  const [date, setdate] = useState('props.date'); // prop needed to ardd in the description for the new blog post 
  const [destination, setDestination] = useState('props.destination'); // prop needed to include the date of the blog post 
  const [postContent, setContent] = useState('props.postContent'); // prop needed to include the date of the blog post 
  const [imageUrl, setImageUrl] = useState('props.imageUrl'); // prop needed to insert the picture for the blog post 

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle the form submission logic here, e.g., save to a database or update your app state

    // Clearing the form inputs
    setTitle('');
    setAuthor('');
    setdate('');
    setDestination('');
    setContent('');
    setImageUrl('');
  };

  // next, create a form component using Material UI's box component
  // the onSubmit is passed as a handleSubmit function so it can take care of the form submission
  return (
    <Box component="form" action="/posts" method="POST" onSubmit={handleSubmit} sx={{ mt: 3 }}> 
      <Typography variant="h4" gutterBottom>
        Add Blog Post
      </Typography> 
      <Grid container spacing={2}> 
        <Grid item xs={12}> 
          <TextField
            id="title"
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)} //onChange is used to update the title when the user types into the text field 
            fullWidth
            required // set to true to make the text field required for submission 
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="details"
            label="Details"
            value={author}
            onChange={(e) => setDetails(e.target.value)}
            multiline
            rows={4}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="blogDescription"
            label="blogDescription"
            value={destination}
            onChange={(e) => setblogDescription(e.target.value)}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="date"
            label="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="post-content"
            label="Post Content"
            value={postContent}
            onChange={(e) => setImageUrl(e.target.value)}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="image-url"
            label="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Add Blog Post
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NewPost; // Now we export the New Post 