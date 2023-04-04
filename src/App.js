import React, { useState, useEffect } from 'react';
import Slider from './components/Slider';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Navbar from './components/Navbar';
import PostCard from './components/PostCard';

const API = "/api";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${API}/posts/`);
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
      <div className="post-list">
        {data.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default App;
