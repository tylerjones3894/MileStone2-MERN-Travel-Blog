import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    cursor: 'pointer',
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.title}>
          Traveler's Blog
        </Typography>
        <div>
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/blog">Blog</Button>
          <Button color="inherit" href="/user">User</Button>
          <Button color="inherit" href="/create">Create Post</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
