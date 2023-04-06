import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button, InputBase, Box, IconButton, Link } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import App from '../App';
import About from './About';
import Destination from './Destination';
import Contact from './Contact';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const InputBaseWrapper = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Navbar = () => {
  return (
    <div>
    <Router>
    <AppBar position="static" sx={{ backgroundColor: '#00464A' }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              component="img"
              src="/logo.png"
              sx={{ width: 40, mr: 1 }}
            />
            Travel Blog
          </Box>
        </Typography>
        <Button color="inherit" to="/">HOME</Button>
        <Button color="inherit" to="/about">ABOUT US</Button>
        <Button color="inherit" to="/destination">DESTINATION</Button>
        <Button color="inherit" to="/contact">CONTACT</Button>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <InputBaseWrapper placeholder="Search…" />
        </Search>
        <IconButton color="inherit">
          <InstagramIcon />
        </IconButton>
        <IconButton color="inherit">
          <FacebookIcon />
        </IconButton>
        <IconButton color="inherit">
          <TwitterIcon />
        </IconButton>
      </Toolbar>
      
      <Routes>
          {/* <Route path="/">
            <App />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/destination">
            <Destination />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route> */}
        <Route path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/destination" component={Destination} />
        <Route path="/contact" component={Contact} />
      </Routes>
      
    </AppBar>
    </Router>
    </div>
  );
};

export default Navbar;
