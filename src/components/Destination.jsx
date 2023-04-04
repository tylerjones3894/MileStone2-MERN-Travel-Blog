import React from "react";
import { useParams } from "react-router-dom";

const Destination = ({ destinations }) => {
    const { destinationId } = useParams();
    const destination = destinations.find(dest => dest.id === destinationId);

    return (
        <div className="destination-page">
            <div className="destination-header">
                <h1>{destination.name}</h1>
                <img src={destination.image} alt={destination.name} />
            </div>
            <div className="destination-description">
                <p>{destination.description}</p>
            </div>
            <div className="destination-activities">
                <h2>Fun stuff to do in {destination.name}</h2>
                <ul>
                    {destination.activities.map(activity => (
                        <li key={activity.id}>{activity.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Destination;