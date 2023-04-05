// src/components/AllPosts.jsx
import React from 'react';
import PostCard from './PostCard';
import { Grid } from '@mui/material';

const AllPosts = ({ posts }) => {
  return (
    <Grid container spacing={2}>
      {posts.map((post) => (
        <Grid item xs={12} sm={4} key={post.id}>
          <PostCard post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default AllPosts;
