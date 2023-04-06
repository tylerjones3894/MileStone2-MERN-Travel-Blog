import React from 'react';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';

const PostCard = ({ post }) => {

  return (
    <div className="post">
      <img src={post.imageUrl} alt={post.title} />
      
      <div className="post-content">
        <h3>{post.title}</h3>
        <p className='content'>{post.postContent}</p>
        
        <p className="post-location"> Location: {post.destination}</p>
        <p className="post-author"> Author: {post.author}</p>
        <p className="post-date">Date: {post.date}</p>
        
        <div className="button-container">
          <a href={`/posts/${post._id}`} style={{ textDecoration: 'none' }}>
            <Button variant="contained" size="small" style={{ backgroundColor: '#067980' }}>
              Read More
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
