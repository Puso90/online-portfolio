import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Models from './pages/Models';

const App = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Footer />
            </>
          }
        />
        {/* Models Route */}
        <Route
          path="/models"
          element={
            <>
              <Models />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;