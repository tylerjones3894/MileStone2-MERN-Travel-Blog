// src/components/PostDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
  const [postDetails, setPostDetails] = useState(null);
  const { postId } = useParams();

  useEffect(() => {
    fetchPostDetails();
  }, []);

  async function fetchPostDetails() {
    try {
      const response = await fetch(`/posts/${postId}`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const post = await response.json();
      setPostDetails(post);
    } catch (error) {
      console.error('Error fetching post details:', error);
    }
  }

  if (!postDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post-details">
      <img src={postDetails.imageUrl} alt={postDetails.title} />
      <h1>{postDetails.title}</h1>
      <p>{postDetails.date}</p>
      <p>{postDetails.postContent}</p>
      <p>{postDetails.author}</p>
    </div>
  );
};

export default PostDetails;
