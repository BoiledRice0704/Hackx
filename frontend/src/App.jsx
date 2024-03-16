import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'; // Import from 'react-router-dom' instead of 'react'
import { Home } from './pages/LoginUserAdmin';
import Login from './pages/Login';
import { AuthProvider } from './contexts/authContext';
import Landing from './pages/Landing';

const App = () => {
  return (
    <>
      {/* <Home/> */}
      {/* <Login/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<AuthProvider><Login/></AuthProvider>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
