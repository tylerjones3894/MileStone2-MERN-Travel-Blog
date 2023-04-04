import React from 'react';

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <img src={post.imageUrl} alt={post.title} />
      <h3>{post.title}</h3>
      <p>{post.blogDescription}</p>
      <p>{post.details}</p>
      <p>{post.date}</p>
    </div>
  );
};

export default PostCard;

