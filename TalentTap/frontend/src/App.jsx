import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Home from './components/Home';
import ProfilePage from './components/ProfilePage';
import Login from './components/Login';
import JobListings from './components/JobListings';
const App = () => {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={<Landing />}
				/>
				<Route
					path="/home"
					element={<Home />}
				/>
				<Route
					path="/profile"
					element={<ProfilePage />}
				/>
				<Route
					path="/login"
					element={<Login />}
				/>
				<Route
					path="/view-all-jobs"
					element={<JobListings />}
				/>
			</Routes>
		</Router>
	);
};

export default App;
