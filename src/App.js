import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material'; // Importing Material UI components

// NavBar
const Navbar = () => {
  return (
    <AppBar position="static"> {/* AppBar is a Material UI component */}
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h6" sx={{ cursor: 'pointer' }}>
          Traveler's Blog
        </Typography>
        <div>
          <Button color="inherit" href="/">Home</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
