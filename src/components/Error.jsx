import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        cursor: 'not-allowed'
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Typography variant="h1" sx={{ fontFamily: 'system-ui', fontWeight: '900' }}>
              404 Error 
            </Typography>
            <Typography variant="h6" sx={{ fontFamily: 'system-ui' }}>
              Oh no, this page was lost in transit...
            </Typography>
            <Button onClick={handleClick} variant="contained">Back Home</Button>
          </Grid>
          <Grid xs={6}>
            <img
              src="https://grownuptravelguide.com/wp-content/uploads/2020/04/AdobeStock_323158365.jpeg"
              alt="Sorry, luggage not found."
              width={600} height={300}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Error404;
