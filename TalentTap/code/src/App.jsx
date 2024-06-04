import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';
import ViewAllJobs from './components/ViewAllJobs';
const App = () => {
	return (
		<>
			<Navbar/>
			<Banner />
      <HomeCards/>
      <JobListings/>
		</>
	);
};

export default App;
