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