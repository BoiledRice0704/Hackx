import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'; // Import from 'react-router-dom' instead of 'react'
import { Home } from './pages/LoginUserAdmin';
import Login from './pages/Login';
import { AuthProvider } from './contexts/authContext';
import Landing from './pages/Landing';
import Chat from './pages/Chat';

const App = () => {
  return (
    <>
      {/* <Home/> */}
      {/* <Login/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Landing />} />
          <Route path="/chat" element={<Chat/>} />
          <Route path="/login" element={<AuthProvider><Login/></AuthProvider>} />

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
