import React, { useState,useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './components/Landing';
import Home from './components/Home';
import ProfilePage from './components/ProfilePage';
import Login from './components/Login';
import JobListings from './components/JobListings';
import { UserContext, UserProvider } from './Context/UserContext';


const App = () => {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="*"
            element={
              <RequireAuth>
                <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/view-all-jobs" element={<JobListings />} />
                </Routes>
              </RequireAuth>
            }
          />
        </Routes>
      </UserProvider>
    </Router>
  );
};

const RequireAuth = ({ children }) => {
  const { isAuthenticated } = useContext(UserContext);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default App;