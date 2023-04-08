import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Destination from './components/Destination';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Error404 from './components/Error';
import './App.css';

const App = () => {
 
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destination" element={<Destination />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error404 />} /> {/* Catch-all route */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
