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
  transition: theme.transitions.create('width'),
  '&:focus-within': {
    width: '20%',
  }
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
    '&:focus': {
      outline: 'none',
    },
  },
}));

const Navbar = () => {
  return (
    <div>
    <Router>
    <AppBar position="static" sx={{ backgroundColor: '#00A19D' }}>
  <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2,  }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Pacifico', fontSize: '33px', color: '#ffffff' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              component="img"
              src="/logo.png"
              sx={{ width: 40, mr: 1 }}
            />
            Travelers’ Netflix
          </Box>
        </Typography>
        <Button sx={{ '&:hover': { backgroundColor: '#029390' } }} color="inherit" to="/">HOME</Button>
        <Button sx={{ '&:hover': { backgroundColor: '#029390' } }} color="inherit" to="/about">ABOUT US</Button>
        <Button sx={{ '&:hover': { backgroundColor: '#029390' } }} color="inherit" to="/destination">DESTINATION</Button>
        <Button sx={{ '&:hover': { backgroundColor: '#029390' } }} color="inherit" to="/contact">CONTACT</Button>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <InputBaseWrapper placeholder="Traveling to..." />
        </Search>
        <IconButton sx={{ '&:hover': { backgroundColor: '#029390' } }} color="inherit">
          <InstagramIcon />
        </IconButton>
        <IconButton sx={{ '&:hover': { backgroundColor: '#029390' } }} color="inherit">
          <FacebookIcon />
        </IconButton>
        <IconButton sx={{ '&:hover': { backgroundColor: '#029390' } }} color="inherit">
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
