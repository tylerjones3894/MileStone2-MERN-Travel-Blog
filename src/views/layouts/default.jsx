// default view for edit/new posts
import React from 'react';
import Navbar from '../../Components/Navbar';


const Default = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Default;
