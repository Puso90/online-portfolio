import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Models from './components/Models';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div id="__next">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/models" element={<Models />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;