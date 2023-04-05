import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  CardActions,
} from '@mui/material';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const PostCard = ({ post }) => {
  const shareUrl = `posts/${post.id}`; // Replace with the URL structure of your website

  return (
    <Card className="post-card" sx={{ maxWidth: 345, border: 'none' }}>
      <CardMedia
        component="img"
        height="140"
        image={post.imageUrl}
        alt={post.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.blogDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="info" component={Link} to={`/posts/${post.id}`}>
          Read More
        </Button>
        <FacebookShareButton url={shareUrl} quote={post.title}>
          <Button size="small" color="primary">
            <FacebookIcon />
          </Button>
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} title={post.title}>
          <Button size="small" color="primary">
            <TwitterIcon />
          </Button>
        </TwitterShareButton>
      </CardActions>
    </Card>
  );
};

const BlogCarousel = ({ posts }) => {
  const displayPosts = posts.slice(0, 4);

  return (
    <Grid container spacing={5}>
      {displayPosts.map((post) => (
        <Grid item xs={12} sm={4} key={post.id}>
          <PostCard post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default BlogCarousel;
