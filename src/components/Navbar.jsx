import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  InputBase,
  Box,
  IconButton,
} from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

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

const linkStyle = {
  textDecoration: 'none',
  color: 'inherit',
};

const Navbar = () => {
  return (
    <div>
  
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
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Pacifico', fontSize: '33px', color: '#ffffff' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* <Box
              component="img"
              src="#"
              sx={{ width: 40, mr: 1 }}
            /> */}
            Travel Blog
          </Box>
        </Typography>
        <Link to="/" style={linkStyle}>
            <Button color="inherit">HOME</Button>
          </Link>
          <Link to="/about" style={linkStyle}>
            <Button color="inherit">ABOUT US</Button>
          </Link>
          <Link to="/destination" style={linkStyle}>
            <Button color="inherit">DESTINATION</Button>
          </Link>
          <Link to="/contact" style={linkStyle}>
            <Button color="inherit">CONTACT</Button>
          </Link>
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


    
      
    </AppBar>
   
    </div>
  );
};

export default Navbar;
