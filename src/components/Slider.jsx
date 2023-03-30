// import React from 'react';
// import Carousel from '@mui-treasury/carousel';
// import { Box, Paper } from '@mui/material';

// const FullWidthSlider = () => {
//   const images = [
//     'https://via.placeholder.com/1200x400?text=Image+1',
//     'https://via.placeholder.com/1200x400?text=Image+2',
//     'https://via.placeholder.com/1200x400?text=Image+3',
//   ];

//   return (
//     <Box>
//       <Carousel
//         autoplay
//         interval={5000}
//         animation="slide"
//         indicators={false}
//         navButtonsAlwaysVisible
//         navButtonsProps={{
//           style: {
//             backgroundColor: 'rgba(0, 0, 0, 0.5)',
//             color: '#fff',
//           },
//         }}
//       >
//         {images.map((image, index) => (
//           <Paper
//             key={index}
//             component="img"
//             src={image}
//             alt={`Slide ${index + 1}`}
//             sx={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
//           />
//         ))}
//       </Carousel>
//     </Box>
//   );
// };

// export default FullWidthSlider;
