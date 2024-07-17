import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import axios from 'axios'; // Import Axios
import Landing from './components/Landing';
import Home from './components/Home';
import ProfilePage from './components/ProfilePage';
import Login from './components/Login';
import JobListings from './components/JobListings';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState(null); // State to store user info
  const navigate = useNavigate();

  // Function to fetch user data when authenticated
  const fetchUserData = async () => {
    try {
      // Replace with your actual backend endpoint to fetch user data
      const response = await axios.get('/api/user/profile', {
        headers: {
          'Authorization': `Bearer ${accessToken}`, // Example: if using JWT token for auth
          'Content-Type': 'application/json'
        }
      });
      setUserInfo(response.data); // Update state with fetched user data
    } catch (error) {
      console.error('Error fetching user data:', error.message);
      // Handle error (e.g., show error message to the user)
    }
  };

  useEffect(() => {
    // Fetch user data when authenticated
    if (isAuthenticated) {
      fetchUserData();
    }
  }, [isAuthenticated]); // Only run when isAuthenticated changes

  // Function to handle authentication status
  const handleAuth = (authenticated, user) => {
    setIsAuthenticated(authenticated);
    if (authenticated) {
      navigate('/home'); // Redirect to home page after login
    }
  };

  useEffect(() => {
    // Redirect logic based on authentication status
    if (isAuthenticated) {
      navigate('/home');
    } else {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Landing onLogin={() => handleAuth(true)} />}
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={<Login onLogin={() => handleAuth(true)} />}
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <ProfilePage userInfo={userInfo} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/view-all-jobs"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <JobListings />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
