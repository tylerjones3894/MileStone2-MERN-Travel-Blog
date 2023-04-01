import React, { useState, useEffect } from 'react';
import Slider from './components/Slider';
import Navbar from './components/Navbar';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const API= "http://localhost:3000"


const App = () => {

  return (
    <div>
      <Navbar />
      <Slider />
      {/* Add other components or views here */}
    </div>
  );
};

export default App;
