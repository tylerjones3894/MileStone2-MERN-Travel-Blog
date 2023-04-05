// src/components/PostCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon } from 'react-share';
import { Button } from '@mui/material';

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <img src={post.imageUrl} alt={post.title} />
      <h3>{post.title}</h3>
      <p>{post.blogDescription}</p>
      <p>{post.details}</p>
      <p>{post.date}</p>
      <Link to={`/posts/${post._id}`} style={{ textDecoration: 'none' }}>
        <Button variant="contained" style={{ backgroundColor: 'lightblue' }}>
          Read More
        </Button>
      </Link>
      <div className="social-icons">
        <FacebookShareButton
          url={window.location.href}
          quote={post.title}
          hashtag="#travel_blog"
        >
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <TwitterShareButton
          url={window.location.href}
          title={post.title}
          hashtags={['travel_blog']}
        >
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
      </div>
    </div>
  );
};

export default PostCard;
