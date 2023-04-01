import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

 const Navbar = () => {
   return (
     <AppBar position="static">
       <Toolbar
         sx={{
           justifyContent: 'space-between',
         }}
       >
         <Typography variant="h6">
           Travel Blog
         </Typography>
         <Button color="inherit"><h1>Blog Site</h1></Button>
       </Toolbar>
     </AppBar>
   );
 };

 export default Navbar;

// RESPONSIVE NAVBAR WITH DRAWER AND SLIDER BELOW

// import React, { useState } from 'react';
// import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { makeStyles } from '@mui/styles';
// import Slider from './Slider';

// const useStyles = makeStyles((theme) => ({
//   appBar: {
//     [theme.breakpoints.up('sm')]: {
//       width: `calc(100% - ${theme.drawerWidth}px)`,
//       marginLeft: theme.drawerWidth,
//     },
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//     [theme.breakpoints.up('sm')]: {
//       display: 'none',
//     },
//   },
//   title: {
//     flexGrow: 1,
//   },
//   drawer: {
//     width: theme.drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: theme.drawerWidth,
//   },
// }));

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const classes = useStyles();

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <div>
//       <Toolbar />
//       <List>
//         {['Home', 'About', 'Contact'].map((text) => (
//           <ListItem button key={text}>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

//   return (
//     <div>
//       <AppBar position="fixed" className={classes.appBar}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             className={classes.menuButton}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" className={classes.title}>
//             Travel Blog
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//       <nav className={classes.drawer} aria-label="navigation">
//         <Drawer
//           variant="temporary"
//           anchor="left"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           classes={{
//             paper: classes.drawerPaper,
//           }}
//           ModalProps={{
//             keepMounted: true,
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//       <Toolbar />
//       <Slider />
//     </div>
//   );
// };

// export default Navbar;
