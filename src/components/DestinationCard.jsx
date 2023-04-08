import React from 'react';

const DestinationCard = ({ post }) => {

    return (
        <div className="destcard">
          <div className='destcard-container'>
          <img src={post.imageUrl} alt={post.title} className='destcard-image' />
            <p className="destcard-location">  {post.destination}</p>
        </div>
        </div>
      );
    };

export default DestinationCard;