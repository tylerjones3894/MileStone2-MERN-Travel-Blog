import React, { useState, useEffect } from 'react';
import DestinationCard from './DestinationCard';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Destination = () => {
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
      <div className="container">
        <div className="blog-posts">
          {data.map((post) => (
            <div className="post-wrapper" key={post._id}>
              <DestinationCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destination;
