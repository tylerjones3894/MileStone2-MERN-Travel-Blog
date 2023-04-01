import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const AuthorList = ({ authors }) => {
  return (
    <List>
      {authors.map((author) => (
        <ListItem key={author._id}>
          <ListItemText primary={author.name} secondary={author.Bio} />
        </ListItem>
      ))}
    </List>
  );
};

export default AuthorList;
