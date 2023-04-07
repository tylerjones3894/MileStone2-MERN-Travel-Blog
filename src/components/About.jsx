import React from 'react';
import {
    Box,
    Container,
    Typography
  } from '@mui/material';

const About = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '80vh',
            }}
        >
            <Container maxWidth="md">
            <Typography variant="h1" sx={{ fontFamily: 'Georgia', textAlign: 'center' }}>
              About Us!
            </Typography>
            <Typography variant="h3" sx={{ fontFamily: 'sans-serif' }}>
              We are a group that is dedicated to travel and all of the joy it has to offer! Our goal is to bring you honest advice and share experiences that can help you prepare for you upcoming travels!
            </Typography>
            <Typography variant="h3" sx={{ fontFamily: 'sans-serif' }}>
              Our blog journey began 5 years ago when our founder was...
            </Typography>
            </Container>
        </Box>
    )
};

export default About;