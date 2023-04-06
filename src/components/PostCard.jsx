import React from 'react';
import { Button } from '@mui/material';

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <img src={post.imageUrl} alt={post.title} />
      <h3>{post.title}</h3>
      <p>{post.postContent}</p>
      <p>{post.destination}</p>
      <p>{post.date}</p>
      <p>{post.author}</p>
      <a href={`/posts/${post._id}`} style={{ textDecoration: 'none' }}>
        <Button variant="contained" style={{ backgroundColor: 'lightblue' }}>
          Read More
        </Button>
      </a>
    </div>
  );
};

export default PostCard;
