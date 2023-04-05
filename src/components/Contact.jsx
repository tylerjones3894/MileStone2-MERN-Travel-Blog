import React from 'react';
import {
    Box,
    Container,
    Typography,
    Button
  } from '@mui/material';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Contact = ({ post }) => {
    const shareUrl = `posts/${post.id}`; // Replace with the URL structure of your website

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh'
            }}
        >
            <Container maxWidth="md">
            <Typography variant="h1">
              Contact Us!
            </Typography>
            <Typography variant="h3">
              <ContactMailIcon/>
              TravelBlog@hotmail.com
            </Typography>
            <Typography variant="h3">
              <ContactPhoneIcon/>
              1-800-555-TRAVEL
            </Typography>
            <Typography variant="h6">
              You can reach us by eamil 24/7. Please allow one business day for reply.
              Our phone lines opporate Monday-Friday between 9am-5pm PST.
            </Typography>
                Social Links:
                <FacebookShareButton url={shareUrl} quote={post.title}>
                <Button size="small" color="primary">
                    <FacebookIcon />
                </Button>
                </FacebookShareButton>
                <TwitterShareButton url={shareUrl} title={post.title}>
                <Button size="small" color="primary">
                    <TwitterIcon />
                </Button>
                </TwitterShareButton>
            </Container>
        </Box>
    )
};

export default Contact;