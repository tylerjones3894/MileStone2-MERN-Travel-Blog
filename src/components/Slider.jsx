import React from 'react';
import { Box } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Slider = () => {
  return (
    <Box
      sx={{
        width: '100%',
        marginTop: 0,
        height: '600px', 
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Carousel
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        infiniteLoop
        autoPlay
        interval={5000}
        transitionTime={1000}
      >
        <div>
          <video
            src="http://marbakerswe.com/wp-content/uploads/2023/04/clideo_editor_d904f39c208d4c968eb09381438b6517.mp4"
            muted
            loop
            autoPlay
            playbackRate={0.1} // Set the playback rate to 0.5 to slow down the video by half
            style={{ height: '600px', width: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', textAlign: 'center', zIndex: '1', cursor: 'default', pointerEvents: 'none', width: '100%', maxWidth: '800px' }}>
          <h1 style={{ fontSize: '50px', fontWeight: 'bold', margin: '0', fontFamily: 'Lato', fontWeight: 300 }}>Discover the world, one trip at a time.</h1>
          </div>
        </div>
      </Carousel>
    </Box>
  );
};

export default Slider;
