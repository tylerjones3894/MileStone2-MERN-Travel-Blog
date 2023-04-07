import React, { useState, useEffect } from 'react';
import Slider from './Slider';
import PostCard from './PostCard';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Home = () => {
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
      <Slider />
      <div className="headline-text">
        <h1 className="blog-title">Recent stories from traveling</h1>
        <p>Lorem ipsum dolor sit amet, sed erant similique forensibus no, eam suas enim forensibus et. Est no dolore malorum.</p>
      </div>

      <div className="container">
        <div className="blog-posts">
          {data.map((post) => (
            <div className="post-wrapper" key={post._id}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;
