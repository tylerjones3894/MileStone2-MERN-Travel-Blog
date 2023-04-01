import React, { useState, useEffect } from 'react';
import Slider from './Components/Slider';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Default from './views/layouts/Default';


const API= "http://localhost:3000"


const App = () => {
  const [authors, setAuthors] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  const fetchAuthors = async () => {
    // Fetch authors from your API and update the state
    // Replace with the correct API endpoint URL
    const response = await fetch('/api/authors');
    const data = await response.json();
    setAuthors(data);
  };

  const handleFormSubmit = async (authorData) => {
    // Create or update the author using your API
    // Replace with the correct API endpoint URL
    const response = await fetch('/api/authors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(authorData),
    });

    if (response.ok) {
      // Refresh the author list after a successful submission
      fetchAuthors();
    } else {
      // Handle error
      console.error('Error creating author:', await response.text());
    }
  };

  const handleAuthorSelect = (author) => {
    setSelectedAuthor(author);
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  return (
    <div>
      <Slider />
      {/* Add other components or views here */}
    </div>
  );
};

export default App;
