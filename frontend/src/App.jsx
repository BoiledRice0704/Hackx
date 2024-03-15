import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'; // Import from 'react-router-dom' instead of 'react'
import { Home } from './pages/Home';
import Login from './pages/Login';

const App = () => {
  return (
    <>
      {/* <Home/> */}
      {/* <Login/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/d" element={<Home />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
