import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"; // Import from 'react-router-dom' instead of 'react'
import Login from "./pages/Login";
import { AuthProvider } from "./contexts/authContext";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Landing />} />
          <Route
            path="/login"
            element={
              <AuthProvider>
                <Login />
              </AuthProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
