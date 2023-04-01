import React, { useState, useEffect } from 'react';
import Slider from './Components/Slider';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Navbar from './Components/Navbar';
import axios from 'axios';


const API= "http://localhost:3000"

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${API}/posts`,
      );
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <Slider />
      {/* Add other components or views here */}
    </div>
  );
};

export default App;
