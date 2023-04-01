import React, { useState, useEffect } from 'react';
import Slider from './components/Slider';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Default from './views/layouts/Default';



const App = () => {
  
  return (
    <div>
      <Default>
      <Slider />
      
      {/* Add other components or views here */}
    </Default>
    </div>
  );
};

export default App;
