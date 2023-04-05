import React, { useState, useEffect } from 'react';
import Slider from './components/Slider';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Navbar from './components/Navbar';
import BlogCarousel from './components/BlogCarousel';
import PostDetails from './components/PostDetails';
import AllPosts from './components/AllPosts';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';


const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`/posts`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const postData = await response.json();
      setData(postData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <Slider />
    </div>
    // <Router>
    //   <div>
    //     <Navbar />
    //     <Slider />
    //     <Routes>
    //       <Route path="/" element={<BlogCarousel posts={data} />} />
    //       <Route path="/posts/:postId" element={<PostDetails posts={data} />} />
    //     </Routes>
    //   </div>
    // </Router>
  );
};

export default App;
