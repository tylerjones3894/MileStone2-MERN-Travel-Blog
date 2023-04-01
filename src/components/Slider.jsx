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
        height: '400px',
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
          <img
            src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Image 1"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <p className="legend">Image 1</p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1506104489822-562ca25152fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            alt="Image 2"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <p className="legend">Image 2</p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1128&q=80"
            alt="Image 3"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <p className="legend">Image 3</p>
        </div>
      </Carousel>
    </Box>
  );
};

export default Slider;
