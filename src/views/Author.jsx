import React from 'react';
import { Typography, Box } from '@mui/material';

const Author = ({ author }) => {
  return (
    <Box>
      <Typography variant="h4" component="h2" gutterBottom>
        {author.name}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Start Date: {new Date(author.startDate).toLocaleDateString()}
      </Typography>
      <Typography variant="body1">{author.Bio}</Typography>
    </Box>
    );
};

export default Author;
