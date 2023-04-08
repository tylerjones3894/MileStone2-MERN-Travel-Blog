import React from 'react';

const DestinationCard = ({ post }) => {

    return (
        <div className="destcard">
            
          <img src={post.imageUrl} alt={post.title} />
            <p className="destcard-location">  {post.destination}</p>
        </div>
      );
    };

export default DestinationCard;